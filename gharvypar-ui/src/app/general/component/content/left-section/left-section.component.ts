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
  @Input() collapsed: boolean = false;

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
  getIcon(option: string): string {
    const icons: { [key: string]: string } = {
      'Add Property': 'bi bi-plus-circle',
      'View Properties': 'bi bi-card-list',
      'Rent Management': 'bi bi-cash-coin',
      'Ownership Docs': 'bi bi-file-earmark-text',
      'View Tenants': 'bi bi-people',
      'Add Tenant': 'bi bi-person-plus',
      'View Payments': 'bi bi-credit-card',
      'Upload Documents': 'bi bi-upload',
      'AI Inspection': 'bi bi-camera-video',
      Maintenance: 'bi bi-tools',
      'Lease Agreement': 'bi bi-file-earmark-check',
    };

    return icons[option] || 'bi bi-chevron-right';
  }
}
