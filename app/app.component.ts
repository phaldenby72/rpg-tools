import {Component} from '@angular/core';

@Component({
  selector: 'app',
  styles: [`
    :host {
      font-family: sans-serif;
    }
    header, footer, main {
      margin: 0 1em;
    }
    footer {
      margin-top: 1em;
      border-top: 1px solid #ccc;
      padding-top: 0.5em;
    }
  `],
  template: `
    <header>
      <h1>RPG Tools</h1>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>
      RPG Tools &copy; Peter Haldenby 2017
    </footer>
  `
})
export class AppComponent {
  name: string = 'RPG Tools';
}
