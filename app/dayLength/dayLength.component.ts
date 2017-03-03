import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'about',
  template: require('./dayLength.component.html')
})
export class DayLengthComponent implements OnInit, OnDestroy {
  ngOnInit() { console.log('DayLength::ngOnInit'); }
  ngOnDestroy() { console.log('DayLength::ngOnDestroy'); }
}
