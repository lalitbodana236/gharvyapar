import { CommonModule } from '@angular/common';
import { Component, Input, Type } from '@angular/core';
import { DefaultCenterComponent } from '../../center/default-center/default-center.component';
import { AddPropertyComponent } from '../../property/add-property/add-property.component';
import { ViewPropertiesComponent } from '../../property/view-properties/view-properties.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ViewTenantsComponent } from '../../tenants/view-tenants/view-tenants.component';

@Component({
  selector: 'app-center-section',
  imports: [CommonModule],
  templateUrl: './center-section.component.html',
  styleUrl: './center-section.component.css',
})
export class CenterSectionComponent {
  @Input() selected: string = '';
  @Input() option: string = '';

  componentToRender: Type<any> = DefaultCenterComponent;

  ngOnChanges(): void {
    const map: { [key: string]: Type<any> } = {
      'Add Property': AddPropertyComponent,
      'View Properties': ViewPropertiesComponent,
      Overview: DashboardComponent,
      'Tenant List': ViewTenantsComponent,
    };

    this.componentToRender = map[this.option] || DefaultCenterComponent;
  }
}
