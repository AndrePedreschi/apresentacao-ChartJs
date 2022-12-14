import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GraficosComponent } from './graficos/graficos.component';


@NgModule({
  declarations: [
    AppComponent,
    GraficosComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
