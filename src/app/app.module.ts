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
import { EditModuleComponent } from './rest/module/edit-module/edit-module.component';
import { EditStagiaireComponent } from './rest/stagiaire/edit-stagiaire/edit-stagiaire.component';
import { EditProgrammeComponent } from './rest/programme/edit-programme/edit-programme.component';
import { EditPromotionComponent } from './rest/promotion/edit-promotion/edit-promotion.component';
import { EditAdresseComponent } from './rest/adresse/edit-adresse/edit-adresse.component';
import { FormateurComponent } from './rest/formateur/formateur.component';
import { SalleComponent } from './rest/salle/salle.component';
import { EditSalleComponent } from './rest/salle/edit-salle/edit-salle.component';
import { EditFormateurComponent } from './rest/formateur/edit-formateur/edit-formateur.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgrammeComponent,
    PromotionComponent,
    ModuleComponent,
    StagiaireComponent,
    AdresseComponent,
    EditModuleComponent,
    EditStagiaireComponent,
    EditProgrammeComponent,
    EditPromotionComponent,
    EditAdresseComponent,
    FormateurComponent,
    SalleComponent,
    EditSalleComponent,
    EditFormateurComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
