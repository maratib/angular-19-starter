import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResponsiveHelperComponent } from "@/app/shared/components/responsive-helper/responsive-helper.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ResponsiveHelperComponent],
  template: `
  <div>
  <router-outlet></router-outlet>
  <app-responsive-helper></app-responsive-helper>
  <!-- <ngx-sonner-toaster [theme]="themeService.isDark ? 'dark' : 'light'"></ngx-sonner-toaster> -->
</div>`
})
export class AppComponent {
  title = 'project-name';
}
