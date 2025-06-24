import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, NotificationComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Output() moduleSelected = new EventEmitter<string>();
  @Output() toggleSidebar = new EventEmitter<void>();

  toggle() {
    this.toggleSidebar.emit();
  }

  showNotifications = false;

  selectModule(module: string) {
    this.moduleSelected.emit(module);
  }

  logout() {
    // Add actual logout logic here
    console.log('User logged out');
  }

  notificationCount: number = 3; // You can fetch this from a service later

  toggleNotifications() {
    console.log('Navigate to notifications page or modal');
    this.showNotifications = !this.showNotifications;
  }
}
