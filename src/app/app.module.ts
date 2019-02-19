import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProgrammeComponent} from './rest/programme/programme.component';
import {PromotionComponent} from './rest/promotion/promotion.component';
import {ModuleComponent} from './rest/module/module.component';
import {StagiaireComponent} from './rest/stagiaire/stagiaire.component';
import {AdresseComponent} from './rest/adresse/adresse.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProgrammeComponent,
    PromotionComponent,
    ModuleComponent,
    StagiaireComponent,
    AdresseComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
