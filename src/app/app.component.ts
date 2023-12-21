import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Actions } from 'src/store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<{ measureSystem: string }>) {}
  title = 'weather-app';

  ngOnInit(): void {}

  measureSystemChange(event: any) {
    this.store.dispatch(
      Actions.setMeasureSystem({ measureSystem: event.value })
    );
  }
}
