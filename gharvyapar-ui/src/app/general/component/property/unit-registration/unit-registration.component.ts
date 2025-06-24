import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-unit-registration',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './unit-registration.component.html',
  styleUrl: './unit-registration.component.css',
})
export class UnitRegistrationComponent {
  unit = {
    unitNumber: '',
    unitType: '',
    unitCategory: '',
    areaSqft: null,
    status: 'VACANT',
    monthlyRent: null,
    components: [],
  };

  unitTypes = ['FLAT', 'PG', 'ROOM', 'SHOP', 'STUDIO', 'WAREHOUSE'];
  unitCategories = ['RESIDENTIAL', 'COMMERCIAL', 'MIXED_USE'];
  unitStatuses = ['VACANT', 'OCCUPIED', 'UNDER_MAINTENANCE'];
  components = [
    'BEDROOM',
    'KITCHEN',
    'BATHROOM',
    'HALL',
    'TOILET',
    'SHARED_TOILET',
    'STORAGE_AREA',
    'SHOWROOM_AREA',
    'BALCONY',
  ];

  onComponentChange(event: any) {
    const { checked, value } = event.target;
    if (checked) {
      this.unit.components.push();
    } else {
      this.unit.components = this.unit.components.filter((c) => c !== value);
    }
  }

  onSubmit() {
    console.log('Unit Submitted:', this.unit);
    // Call API here
  }
}
