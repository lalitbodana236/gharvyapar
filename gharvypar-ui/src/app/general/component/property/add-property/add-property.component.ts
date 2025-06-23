import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AddressService } from '../../../service/address.service';
import { PropertyService } from '../../../service/property.service';
import { Property } from '../../../interface/property.model';

@Component({
  selector: 'app-add-property',
  imports: [ReactiveFormsModule, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css',
  standalone: true,
})
export class AddPropertyComponent {
  propertyForm!: FormGroup;
  propertyTypes: string[] = ['HOUSE', 'APARTMENT', 'PG', 'COMMERCIAL'];

  states: string[] = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
  ];
  // Example

  constructor(
    private fb: FormBuilder,
    private addressService: AddressService,
    private propertyService: PropertyService
  ) {}

  ngOnInit(): void {
    this.propertyForm = this.fb.group({
      propertyName: ['', [Validators.required, Validators.maxLength(100)]],
      address: ['', Validators.required],
      addressLine2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: [
        '',
        [Validators.required, Validators.pattern(/^[1-9][0-9]{5}$/)],
      ],
      type: ['', Validators.required],
      floor: ['', [Validators.required, Validators.min(1)]],
      ownershipProof: [null, Validators.required],
      country: ['India'],
    });

    // this.propertyForm.get('pincode')?.valueChanges.subscribe((pin) => {
    //   if (pin && pin.length === 6) {
    //     this.lookupAddress(pin);
    //   }
    // });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.propertyForm.patchValue({ ownershipProof: file });
    }
  }

  onSubmit(): void {
    if (this.propertyForm.invalid) {
      this.propertyForm.markAllAsTouched();
      return;
    }

    const formData = new FormData();
    Object.entries(this.propertyForm.value).forEach(([key, value]) => {
      formData.append(key, value as any);
    });
    if (this.propertyForm.valid) {
      const property: Property = {
        ...this.propertyForm.value,
        userId: 1, // Replace with real userId from auth context
      };

      this.propertyService.addProperty(property.userId, property).subscribe({
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

  onPincodeBlur(): void {
    const pincode = this.propertyForm.get('pincode')?.value;
    if (pincode && pincode.length === 6) {
      this.addressService
        .getAddressFromPincode(pincode)
        .subscribe((res: any) => {
          const data = res[0];
          if (data.Status === 'Success' && data.PostOffice.length > 0) {
            const postOffice = data.PostOffice[0];
            this.propertyForm.patchValue({
              city: postOffice.District,
              state: postOffice.State,
            });
          } else {
            alert('Invalid Pincode');
          }
        });
    }
  }
}
