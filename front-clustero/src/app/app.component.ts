import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './landing/landing.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingComponent],
  template: `<app-landing></app-landing>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-clustero';
}
