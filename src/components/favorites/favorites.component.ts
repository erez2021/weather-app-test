import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  favoriteCities: string[] = [];

  constructor(private store: Store<{ favoriteCities: string[] }>) {
    this.store.subscribe((data: any) => {
      console.log(data.appState.favoriteCities);
      this.favoriteCities = data.appState.favoriteCities;
    });
  }
}
