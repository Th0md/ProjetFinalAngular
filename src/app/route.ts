import {Routes} from '@angular/router';
import {ModuleComponent} from './rest/module/module.component';
import {StagiaireComponent} from './rest/stagiaire/stagiaire.component';
import {PromotionComponent} from './rest/promotion/promotion.component';
import {ProgrammeComponent} from './rest/programme/programme.component';
import {EditModuleComponent} from './rest/module/edit-module/edit-module.component';
import {EditStagiaireComponent} from './rest/stagiaire/edit-stagiaire/edit-stagiaire.component';
import {EditPromotionComponent} from './rest/promotion/edit-promotion/edit-promotion.component';
import {EditProgrammeComponent} from './rest/programme/edit-programme/edit-programme.component';
import {FormateurComponent} from './rest/formateur/formateur.component';
import {SalleComponent} from './rest/salle/salle.component';
import {EditFormateurComponent} from './rest/formateur/edit-formateur/edit-formateur.component';
import {EditSalleComponent} from './rest/salle/edit-salle/edit-salle.component';
import {ListeStagiaireComponent} from './rest/liste-stagiaire/liste-stagiaire.component';
import {EditListeStagiaireComponent} from './rest/liste-stagiaire/edit-liste-stagiaire/edit-liste-stagiaire.component';

export const routes: Routes = [
  {path: 'module', component: ModuleComponent},
  {path: 'module/edit', component: EditModuleComponent},
  {path: 'module/edit/:id', component: EditModuleComponent},

  {path: 'stagiaire', component: StagiaireComponent},
  {path: 'stagiaire/edit', component: EditStagiaireComponent},
  {path: 'stagiaire/edit/:id', component: EditStagiaireComponent},

  {path: 'formateur', component: FormateurComponent},
  {path: 'formateur/edit', component: EditFormateurComponent},
  {path: 'formateur/edit/:id', component: EditFormateurComponent},

  {path: 'salle', component: SalleComponent},
  {path: 'salle/edit', component: EditSalleComponent},
  {path: 'salle/edit/:id', component: EditSalleComponent},

  {path: 'promotion', component: PromotionComponent},
  {path: 'promotion/edit', component: EditPromotionComponent},
  {path: 'promotion/edit/:id', component: EditPromotionComponent},


  {path: 'listestagiaire', component: ListeStagiaireComponent},
  {path: 'listestagiaire/:id', component: ListeStagiaireComponent},
  {path: 'listestagiaire/edit', component: EditListeStagiaireComponent},
  {path: 'listestagiaire/edit/:id', component: EditListeStagiaireComponent},
  {path: 'ajoutstagiaire', component: EditListeStagiaireComponent},
];
