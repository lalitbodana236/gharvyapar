import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MainContentComponent } from './general/component/shared/main-content/main-content.component';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, MainContentComponent],
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
