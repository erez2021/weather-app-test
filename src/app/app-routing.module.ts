import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from 'src/components/favorites/favorites.component';
import { WeatherComponent } from 'src/components/weather/weather.component';

const routes: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'favorites', component: FavoritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
