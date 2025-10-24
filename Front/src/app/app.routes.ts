import { Routes } from '@angular/router';
import { Accueil } from './page/accueil/accueil';
import { AjouterPollution } from './page/ajouter-pollution/ajouter-pollution';
import { FormulairePollution } from './formulaire-pollution/formulaire-pollution';

export const routes: Routes = [
  { path: '', component: Accueil },
  { path: 'ajouter', component: FormulairePollution },
  { path: '**', redirectTo: '' }
];
