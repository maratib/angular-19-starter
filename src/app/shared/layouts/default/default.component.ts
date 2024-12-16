import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '@/app/shared/components/footer/footer.component';
import { NavigationEnd, Router, RouterOutlet, Event } from '@angular/router';
import { NavbarComponent } from '@/app/shared/components/navbar/navbar.component';
import { SidebarComponent } from '@/app/shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, RouterOutlet, FooterComponent],
})
export class DefaultComponent implements OnInit {
  private mainContent: HTMLElement | null = null;

  constructor(private readonly router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (this.mainContent) {
          this.mainContent.scrollTop = 0;
        }
      }
    });
  }

  ngOnInit(): void {
    this.mainContent = document.getElementById('main-content');
  }
}
