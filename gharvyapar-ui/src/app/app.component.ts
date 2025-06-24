import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MainContentComponent } from './general/component/content/main-content/main-content.component';
import { BreadcrumbComponent } from './general/component/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, MainContentComponent, BreadcrumbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'GharVyapar-ui';
  selectedOption: string = 'dashboard';

  onOptionSelected(option: string) {
    this.selectedOption = option;
  }
}
