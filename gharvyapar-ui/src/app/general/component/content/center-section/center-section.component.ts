import {
  Component,
  Input,
  Type,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { DefaultCenterComponent } from '../../center/default-center/default-center.component';
import { BreadcrumbService } from '../../../service/breadcrumb.service';
import {
  LEFT_SECTION_OPTIONS,
  LeftSectionOption,
} from '../../../config/left-section.config';

@Component({
  selector: 'app-center-section',
  templateUrl: './center-section.component.html',
  styleUrls: ['./center-section.component.css'],
  standalone: true,
})
export class CenterSectionComponent implements OnChanges {
  @Input() module: string = '';
  @Input() option: string = '';
  @Output() moduleChanged = new EventEmitter<string>();
  @Output() optionChanged = new EventEmitter<string>();

  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  private componentRef!: ComponentRef<any>;

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['option'] || changes['module']) {
      const effectiveOption =
        this.option || this.getDefaultOptionForModule(this.module);
      this.loadComponent(effectiveOption);
    }
  }

  private loadComponent(optionLabel: string): void {
    const componentType =
      this.getComponentForOption(optionLabel, this.module) ||
      DefaultCenterComponent;

    this.container.clear();
    this.componentRef = this.container.createComponent(componentType);

    this.bindComponentOutputs();
    this.breadcrumbService.setBreadcrumbs([this.module, optionLabel]);
  }

  private bindComponentOutputs(): void {
    if (this.componentRef.instance.moduleChanged) {
      this.componentRef.instance.moduleChanged.subscribe((mod: string) =>
        this.moduleChanged.emit(mod)
      );
    }

    if (this.componentRef.instance.optionChanged) {
      this.componentRef.instance.optionChanged.subscribe((opt: string) =>
        this.optionChanged.emit(opt)
      );
    }
  }

  private getComponentForOption(
    optionLabel: string,
    module: string
  ): Type<any> | null {
    const search = (options: LeftSectionOption[]): Type<any> | null => {
      for (const opt of options) {
        if (opt.label === optionLabel && opt.component) return opt.component;
        if (opt.children) {
          const found = search(opt.children);
          if (found) return found;
        }
      }
      return null;
    };

    const options = LEFT_SECTION_OPTIONS[module?.toLowerCase()];
    return search(options || []);
  }

  private getDefaultOptionForModule(module: string): string {
    const options = LEFT_SECTION_OPTIONS[module?.toLowerCase()];
    return this.getFirstLeafLabel(options) || '';
  }

  private getFirstLeafLabel(options: LeftSectionOption[]): string | null {
    for (const opt of options || []) {
      if (opt.children?.length) {
        const label = this.getFirstLeafLabel(opt.children);
        if (label) return label;
      } else {
        return opt.label;
      }
    }
    return null;
  }
}
