// breadcrumb.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private breadcrumbsSubject = new BehaviorSubject<string[]>([]);
  breadcrumbs$ = this.breadcrumbsSubject.asObservable();

  setBreadcrumbs(breadcrumbs: string[]) {
    this.breadcrumbsSubject.next(breadcrumbs);
  }

  addBreadcrumb(crumb: string) {
    const updated = [...this.breadcrumbsSubject.value, crumb];
    this.breadcrumbsSubject.next(updated);
  }

  popBreadcrumb() {
    const updated = [...this.breadcrumbsSubject.value];
    updated.pop();
    this.breadcrumbsSubject.next(updated);
  }

  reset() {
    this.breadcrumbsSubject.next([]);
  }
}
