import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProgrammeComponent} from './rest/programme/programme.component';
import {PromotionComponent} from './rest/promotion/promotion.component';
import {ModuleComponent} from './rest/module/module.component';
import {StagiaireComponent} from './rest/stagiaire/stagiaire.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EditModuleComponent } from './rest/module/edit-module/edit-module.component';
import { EditStagiaireComponent } from './rest/stagiaire/edit-stagiaire/edit-stagiaire.component';
import { EditProgrammeComponent } from './rest/programme/edit-programme/edit-programme.component';
import { EditPromotionComponent } from './rest/promotion/edit-promotion/edit-promotion.component';
import { FormateurComponent } from './rest/formateur/formateur.component';
import { SalleComponent } from './rest/salle/salle.component';
import { EditSalleComponent } from './rest/salle/edit-salle/edit-salle.component';
import { EditFormateurComponent } from './rest/formateur/edit-formateur/edit-formateur.component';
import { ListeStagiaireComponent } from './rest/liste-stagiaire/liste-stagiaire.component';
import { EditListeStagiaireComponent } from './rest/liste-stagiaire/edit-liste-stagiaire/edit-liste-stagiaire.component';
import {RouterModule} from '@angular/router';
import {routes} from './route';

@NgModule({
  declarations: [
    AppComponent,
    ProgrammeComponent,
    PromotionComponent,
    ModuleComponent,
    StagiaireComponent,
    EditModuleComponent,
    EditStagiaireComponent,
    EditProgrammeComponent,
    EditPromotionComponent,
    FormateurComponent,
    SalleComponent,
    EditSalleComponent,
    EditFormateurComponent,
    ListeStagiaireComponent,
    EditListeStagiaireComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
