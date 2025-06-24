import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PropertyService } from '../../../service/property.service';
import { BreadcrumbService } from '../../../service/breadcrumb.service';

@Component({
  selector: 'app-view-unit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-unit.component.html',
  styleUrl: './view-unit.component.css',
})
export class ViewUnitComponent {
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
