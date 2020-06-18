import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Lazy loading routes</h2>
    <h2>Select one</h2>

    <a routerLink="customer">Goto customer module</a>
    <a routerLink="product">Goto product module</a>

    <router-outlet> </router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'lazy-loading';
}
