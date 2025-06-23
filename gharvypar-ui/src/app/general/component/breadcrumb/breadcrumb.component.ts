import { Component } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  imports: [CommonModule, TitleCasePipe],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css',
})
export class BreadcrumbComponent {
  breadcrumbs: string[] = [];

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.breadcrumbs$.subscribe(
      (bc) => (this.breadcrumbs = bc)
    );
  }

  goBack(index: number) {
    const newTrail = this.breadcrumbs.slice(0, index + 1);
    this.breadcrumbService.setBreadcrumbs(newTrail);
    // Optionally emit navigation intent here
  }
}
