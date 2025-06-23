import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-center-section',
  imports: [CommonModule],
  templateUrl: './center-section.component.html',
  styleUrl: './center-section.component.css',
})
export class CenterSectionComponent {
  @Input() selected: string = '';
  @Input() option: string = '';
}
