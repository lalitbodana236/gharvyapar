import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PropertyService } from '../../../service/property.service';
import { BreadcrumbService } from '../../../service/breadcrumb.service';

@Component({
  selector: 'app-add-unit',
  imports: [ReactiveFormsModule, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './add-unit.component.html',
  styleUrl: './add-unit.component.css',
})
export class AddUnitComponent {
  private propertyService = inject(PropertyService);
  private breadcrumbService = inject(BreadcrumbService);
  unitForm!: FormGroup;

  unitCategories = ['COMMERCIAL', 'MIXED_USE', 'RESIDENTIAL'];
  unitTypes = ['FLAT', 'PG', 'ROOM', 'SHOP', 'STUDIO', 'WAREHOUSE'];
  unitStatuses = ['OCCUPIED', 'UNDER_MAINTENANCE', 'VACANT'];
  componentTypes = [
    'BALCONY',
    'BATHROOM',
    'BEDROOM',
    'HALL',
    'KITCHEN',
    'SHARED_TOILET',
    'SHOWROOM_AREA',
    'STORAGE_AREA',
    'TOILET',
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.unitForm = this.fb.group({
      unitNumber: ['', Validators.required],
      areaSqft: [null, [Validators.required, Validators.min(1)]],
      unitCategory: ['', Validators.required],
      unitType: ['', Validators.required],
      status: ['', Validators.required],
      propertyId: [1, Validators.required], // Can be pre-filled if known
      components: this.fb.array([]),
    });
  }

  // Get components FormArray
  get components(): FormArray {
    return this.unitForm.get('components') as FormArray;
  }

  // Add new component
  addComponent(): void {
    const componentGroup = this.fb.group({
      componentType: ['', Validators.required],
      isShared: [false],
      notes: [''],
    });
    this.components.push(componentGroup);
  }

  // Remove component by index
  removeComponent(index: number): void {
    this.components.removeAt(index);
  }

  // Submit handler
  onSubmit(): void {
    if (this.unitForm.invalid) {
      this.unitForm.markAllAsTouched();
      return;
    }

    const formData = this.unitForm.value;

    console.log('Submitting Unit:', formData);

    this.propertyService.addUnit(formData).subscribe({
      next: (res) => {
        console.log('✅ Property added:', res);
        // Show success toast or redirect
      },
      error: (err) => {
        console.error('❌ Error adding property:', err);
      },
    });
  }
}
