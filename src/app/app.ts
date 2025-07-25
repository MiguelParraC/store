import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@shared/components/header/header';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: `
    <div class="container mx-auto">
      <app-header /> 
      <router-outlet />
    </div>
  `,
  //styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('store');
}
