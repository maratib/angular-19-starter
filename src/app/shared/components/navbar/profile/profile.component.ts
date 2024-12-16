import { ThemeService } from '@/app/core/services/theme.service';
import { Component } from '@angular/core';

@Component({
  selector: 'my-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(private readonly themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.theme.update((theme) => {
      const mode = !this.themeService.isDark ? 'dark' : 'light';
      return { ...theme, mode: mode };
    });
  }
}
