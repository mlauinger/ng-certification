import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedForecastComponent } from './detailed-forecast/detailed-forecast.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path: '', component: HomeComponent}, {path: 'forecast/:zipcode', component: DetailedForecastComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
