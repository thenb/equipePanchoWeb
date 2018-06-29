import { NgModule } from '@angular/core';
import { NovidadesComponent } from './novidades.component';
import { NovidadesRoutingModule } from './novidades-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NovidadesComponent
  ],
  imports: [
    BrowserModule,
    NovidadesRoutingModule,
  ],
  exports: [
    NovidadesComponent
  ],
  providers: [
  ]
})
export class NovidadesModule { }
