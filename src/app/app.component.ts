import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <nav-bar></nav-bar>
    <expenses-list></expenses-list>
  `
})
export class AppComponent {
  title = 'billy-angular';
}
