import { Routes } from '@angular/router';
import { FormulairePollution } from './formulaire-pollution/formulaire-pollution';
import { FormulaireUtilisateur } from './formulaire-utilisateur/formulaire-utilisateur';
import { ListeUtilisateur } from './liste-utilisateur/liste-utilisateur';

export const routes: Routes = [
  { path: 'formulaire', component: FormulairePollution },
  { path: 'formulaire-pollution', component: FormulairePollution },
  { path: 'formulaire-utilisateur', component: FormulaireUtilisateur },
  { path: 'liste-utilisateur', component: ListeUtilisateur },
  { path: '**', redirectTo: '' }
];
