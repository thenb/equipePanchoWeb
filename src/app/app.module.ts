import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from './template/template.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./services/script-loader.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ScriptLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
