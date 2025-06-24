import {
  Component,
  EventEmitter,
  Output,
  inject,
  signal,
  effect,
} from '@angular/core';
import { PropertyService } from '../../../service/property.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbService } from '../../../service/breadcrumb.service';

@Component({
  selector: 'app-view-properties',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-properties.component.html',
  styleUrls: ['./view-properties.component.css'],
})
export class ViewPropertiesComponent {
  private propertyService = inject(PropertyService);
  private breadcrumbService = inject(BreadcrumbService);
  properties: any[] = [];

  ngOnInit() {
    this.propertyService.getAllPropertiesByUser(1).subscribe((res) => {
      this.properties = res;
    });
  }

  @Output() moduleChanged = new EventEmitter<string>();
  @Output() optionChanged = new EventEmitter<string>();
  @Output() loadUnits = new EventEmitter<{
    propertyId: number;
    propertyName: string;
  }>();

  onCardClick(property: any) {
    this.optionChanged.emit('View Units'); // Load the correct center component
    this.loadUnits.emit({
      propertyId: property.id,
      propertyName: property.propertyName,
    });
    this.breadcrumbService.setBreadcrumbs(['properties', 'View Units']);
  }
}
