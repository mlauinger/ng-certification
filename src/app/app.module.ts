import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LocationForecastComponent } from './location-forecast/location-forecast.component';
import { DetailedForecastComponent } from './detailed-forecast/detailed-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocationForecastComponent, DetailedForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
