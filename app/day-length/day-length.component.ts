import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'day-length',
  template: require('./day-length.component.html')
})
export class DayLengthComponent implements OnInit, OnDestroy {
  ngOnInit() { console.log('DayLength::ngOnInit'); }
  ngOnDestroy() { console.log('DayLength::ngOnDestroy'); }
}
