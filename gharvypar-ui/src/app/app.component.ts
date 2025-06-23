import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './general/component/header/header.component';

import { NavbarComponent } from './general/component/content/navbar/navbar.component';
import { LeftSectionComponent } from './general/component/content/left-section/left-section.component';
import { CenterSectionComponent } from './general/component/content/center-section/center-section.component';
import { MainContentComponent } from './general/component/content/main-content/main-content.component';
import { BreadcrumbComponent } from "./general/component/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, MainContentComponent, BreadcrumbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'gharvypar-ui';
  selectedOption: string = 'dashboard';

  onOptionSelected(option: string) {
    this.selectedOption = option;
  }
}
