import {Routes} from '@angular/router';
import {ModuleComponent} from './rest/module/module.component';
import {StagiaireComponent} from './rest/stagiaire/stagiaire.component';
import {PromotionComponent} from './rest/promotion/promotion.component';
import {ProgrammeComponent} from './rest/programme/programme.component';
import {EditModuleComponent} from './rest/module/edit-module/edit-module.component';
import {EditStagiaireComponent} from './rest/stagiaire/edit-stagiaire/edit-stagiaire.component';
import {EditPromotionComponent} from './rest/promotion/edit-promotion/edit-promotion.component';
import {EditProgrammeComponent} from './rest/programme/edit-programme/edit-programme.component';

export const routes: Routes = [
  {path: 'module', component: ModuleComponent},
  {path: 'module/edit', component: EditModuleComponent},
  {path: 'module/edit/:id', component: EditModuleComponent},

  {path: 'stagiaire', component: StagiaireComponent},
  {path: 'stagiaire/edit', component: EditStagiaireComponent},
  {path: 'stagiaire/edit/:id', component: EditStagiaireComponent},

  {path: 'promotion', component: PromotionComponent},
  {path: 'promotion/edit', component: EditPromotionComponent},
  {path: 'promotion/edit/:id', component: EditPromotionComponent},

  {path: 'programme', component: ProgrammeComponent},
  {path: 'programme/edit', component: EditProgrammeComponent},
  {path: 'programme/edit/:id', component: EditProgrammeComponent},
];
