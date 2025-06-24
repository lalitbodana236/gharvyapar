import { Component, HostListener } from '@angular/core';
import { CenterSectionComponent } from '../center-section/center-section.component';
import { LeftSectionComponent } from '../left-section/left-section.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from "../../breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-main-content',
  imports: [
    CenterSectionComponent,
    LeftSectionComponent,
    NavbarComponent,
    CommonModule,
    BreadcrumbComponent
],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainContentComponent {
  isSidebarCollapsed = false;
  selectedModule: string = 'dashboard';
  selectedOption: string = '';

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  onModuleChanged(module: any) {
    this.selectedModule = module;
  }

  onModuleSelected(module: any) {
    console.log('Module Changed:', module);
    this.selectedModule = module;
    this.selectedOption = ''; // reset to force re-render if needed
  }

  onSidebarOptionSelected(option: any) {
    console.log('Option Selected:', option);
    this.selectedOption = option;
  }
}
