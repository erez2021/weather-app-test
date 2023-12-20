import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { Actions } from 'src/store/actions';
import { ModalComponent } from '../components/dashboard/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private store: Store<{ measureSystem: string }>
  ) {}
  title = 'weather-app';

  ngOnInit(): void {}
  openDialog() {
    this.dialog.open(ModalComponent);
  }
  measureSystemChange(event: any) {
    console.log(event.value);
    this.store.dispatch(
      Actions.setMeasureSystem({ measureSystem: event.value })
    );
  }
}
