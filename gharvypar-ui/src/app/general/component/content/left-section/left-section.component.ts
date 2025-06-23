import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { LEFT_SECTION_OPTIONS } from '../../../config/left-section.config';
import { BreadcrumbService } from '../../../service/breadcrumb.service';

@Component({
  selector: 'app-left-section',
  imports: [CommonModule],
  templateUrl: './left-section.component.html',
  styleUrl: './left-section.component.css',
})
export class LeftSectionComponent {
  @Input() module: string = '';
  @Output() optionSelected = new EventEmitter<string>();
  @Input() collapsed: boolean = false;
  @Output() moduleChanged = new EventEmitter<string>();

  constructor(private breadcrumbService: BreadcrumbService) {}

  // options: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['module']) {
      const newModule = changes['module'].currentValue;
      // this.options = this.getOptions(newModule);
      console.log('Updated options:', this.options);
    }
  }

  get options() {
    return LEFT_SECTION_OPTIONS[this.module?.toLowerCase()] || [];
  }

  expandedOptions: Set<string> = new Set();

  expanded: Set<string> = new Set();
  toggleOption(option: any) {
    if (this.expanded.has(option.label)) {
      this.expanded.delete(option.label);
    } else {
      this.expanded.add(option.label);
    }
  }

  isExpanded(option: any): boolean {
    return this.expanded.has(option.label);
  }

  handleOptionClick(option: any, event: Event) {
    if (option.children) {
      this.toggleOption(option);
    } else {
      this.selectOption(option.label, event);
    }
    event.stopPropagation();
  }

  selectOption(label: string, event?: Event) {
    this.optionSelected.emit(label);
    this.moduleChanged.emit(this.module);
    if (event) {
      event.stopPropagation();
    }
  }
}
