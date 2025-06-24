import { Type } from '@angular/core';
import { ViewPropertiesComponent } from '../component/property/view-properties/view-properties.component';
import { AddPropertyComponent } from '../component/property/add-property/add-property.component';
import { ViewTenantsComponent } from '../component/tenants/view-tenants/view-tenants.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { AddUnitComponent } from '../component/property/add-unit/add-unit.component';
import { ViewUnitComponent } from '../component/property/view-unit/view-unit.component';

export interface LeftSectionOption {
  icon: string;
  label: string;
  component?: Type<any>; // 👈 NEW: Optional component reference
  children?: LeftSectionOption[];
}

export const LEFT_SECTION_OPTIONS: Record<string, LeftSectionOption[]> = {
  properties: [
    {
      icon: 'bi-building',
      label: 'Properties',
      children: [
        {
          icon: 'bi-eye',
          label: 'View Properties',
          component: ViewPropertiesComponent,
        },
        {
          icon: 'bi-plus-circle',
          label: 'Add Property',
          component: AddPropertyComponent,
        },
        {
          icon: 'bi-house',
          label: 'Units',
          children: [
            {
              icon: 'bi-eye',
              label: 'View Unit',
              component: ViewUnitComponent,
            },
            {
              icon: 'bi-plus-square',
              label: 'Add Unit',
              component: AddUnitComponent,
            },
          ],
        },
      ],
    },
    {
      icon: 'bi-cash-coin',
      label: 'Rent Management',
    },
    {
      icon: 'bi-file-earmark-text',
      label: 'Ownership Docs',
    },
  ],
  tenants: [
    {
      icon: 'bi-people',
      label: 'View Tenants',
      component: ViewTenantsComponent,
    },
    {
      icon: 'bi-person-plus',
      label: 'Add Tenant',
      component: ViewTenantsComponent,
    },
  ],
  dashboard: [
    {
      icon: 'bi-speedometer2',
      label: 'Overview',
      component: DashboardComponent,
    },
    {
      icon: 'bi-bar-chart',
      label: 'Analytics',
    },
  ],
};
