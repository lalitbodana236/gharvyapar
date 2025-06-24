import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent implements OnInit {
  notifications: string[] = [];
  loading = false;
  page = 0;
  perPage = 10;
  allLoaded = false;

  constructor() {}

  ngOnInit(): void {
    this.loadMore();
  }

  loadMore(): void {
    if (this.loading || this.allLoaded) return;
    this.loading = true;
    setTimeout(() => {
      const newNotifications = Array.from(
        { length: this.perPage },
        (_, i) => `🔔 Notification #${this.page * this.perPage + i + 1}`
      );
      this.notifications = [...this.notifications, ...newNotifications];
      this.page++;
      if (this.page === 5) this.allLoaded = true; // Simulate end of list
      this.loading = false;
    }, 1000); // simulate async API
  }

  onScroll(event: any): void {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    if (scrollTop + clientHeight >= scrollHeight - 20) {
      this.loadMore();
    }
  }
}
