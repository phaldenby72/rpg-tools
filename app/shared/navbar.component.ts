import {Component} from '@angular/core';

@Component({
  selector: 'navbar',
  styles: [`
    nav ul {
      list-style-type: none;
      margin: 1em 0;
      padding: 0 1em;
      border-top: 1px solid #069;
      border-bottom: 1px solid #069;
    }
    nav li {
      display: inline-block;
      padding: 0;
    }
    nav a {
      color: #069;
      text-decoration: none;
      padding: 0.5em;
      display: inline-block;
    }
    nav .active {
      background-color: #069;
      color: #fff;
    }
  `],
  template: require('./navbar.component.html')
})
export class NavBarComponent {}