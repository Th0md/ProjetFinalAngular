import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProgrammeComponent } from './rest/programme/programme.component';
import { PromotionComponent } from './rest/promotion/promotion.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgrammeComponent,
    PromotionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
