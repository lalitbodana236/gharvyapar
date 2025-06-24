import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class GenericFormComponent implements OnInit {
  @Input() fields: any[] = [];
  @Input() title: string = 'Form';
  @Output() formSubmit = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    // Now fb is initialized before use
    this.form = this.fb.group({});
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    for (const field of this.fields) {
      const validators = field.required ? [Validators.required] : [];
      this.form.addControl(field.name, this.fb.control('', validators));
    }
  }

  submitForm() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  //   <app-generic-form
  //   [title]="'Unit Registration'"
  //   [fields]="unitFields"
  //   (formSubmit)="handleSubmit($event)"
  // ></app-generic-form>

  unitFields = [
    { name: 'unitNumber', label: 'Unit Number', type: 'text', required: true },
    {
      name: 'unitType',
      label: 'Unit Type',
      type: 'select',
      options: ['FLAT', 'PG', 'ROOM'],
      required: true,
    },
    { name: 'areaSqft', label: 'Area (sqft)', type: 'number', required: true },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      options: ['VACANT', 'OCCUPIED', 'UNDER_MAINTENANCE'],
      required: true,
    },
  ];

  handleSubmit(data: any) {
    console.log('Form Submitted:', data);
  }
}
