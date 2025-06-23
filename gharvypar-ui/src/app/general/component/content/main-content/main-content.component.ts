import { Component } from '@angular/core';
import { CenterSectionComponent } from '../center-section/center-section.component';
import { LeftSectionComponent } from '../left-section/left-section.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-content',
  imports: [
    CenterSectionComponent,
    LeftSectionComponent,
    NavbarComponent,
    CommonModule,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainContentComponent {
  selectedModule: string = 'dashboard'; // from header
  selectedOption: string = ''; // from sidebar

  onModuleSelected(module: string) {
    this.selectedModule = module;
    this.selectedOption = ''; // Reset sidebar selection
  }

  onSidebarOptionSelected(option: string) {
    this.selectedOption = option;
  }
}
