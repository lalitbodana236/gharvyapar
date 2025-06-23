import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-left-section',
  imports: [CommonModule],
  templateUrl: './left-section.component.html',
  styleUrl: './left-section.component.css',
})
export class LeftSectionComponent {
  @Input() module: string = '';
  @Output() optionSelected = new EventEmitter<string>();

  options: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['module']) {
      const newModule = changes['module'].currentValue;
      this.options = this.getOptions(newModule);
      console.log('Updated options:', this.options);
    }
  }

  getOptions(module: string): string[] {
    switch ((module || '').toLowerCase()) {
      case 'properties':
        return [
          'Add Property',
          'View Properties',
          'Rent Management',
          'Ownership Docs',
        ];
      case 'tenants':
        return ['Add Tenant', 'Tenant List', 'KYC Review'];
      case 'dashboard':
        return ['Overview'];
      default:
        return [];
    }
  }

  selectOption(option: string): void {
    this.optionSelected.emit(option);
  }
}
