import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'home',
  styles: [require('./home.component.css')],
  template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
  public title: string = 'RPG Tools';
  constructor() {
  }

  ngOnInit() {
    console.log('Home component initialised');
  }
}
