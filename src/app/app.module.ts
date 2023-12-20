import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { FavoritesComponent } from '../components/favorites/favorites.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { WeatherComponent } from '../components/weather/weather.component';
import { appReducer } from 'src/store/reducer';
import { CardComponent } from 'src/components/dashboard/card/card.component';
import { ModalComponent } from 'src/components/dashboard/modal/modal.component';
import { ForecastCardComponent } from '../components/forecast-card/forecast-card.component';
@NgModule({
  entryComponents: [ModalComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherComponent,
    FavoritesComponent,
    CardComponent,
    ModalComponent,
    ForecastCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatRadioModule,
    StoreModule.forRoot({ appState: appReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
