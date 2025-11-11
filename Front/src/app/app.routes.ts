import { Routes } from '@angular/router';
import { ListePollutionComponent } from './liste-des-pollutions/liste-des-pollutions';
import { FormulairePollution } from './formulaire-pollution/formulaire-pollution';
import { FormulaireUtilisateur } from './formulaire-utilisateur/formulaire-utilisateur';
import { ListeUtilisateur } from './liste-utilisateur/liste-utilisateur';

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: ListePollutionComponent },
  { path: 'pollution/ajouter', component: FormulairePollution },
  { path: 'pollution/modifier/:id', component: FormulairePollution },
  { path: 'formulaire-utilisateur', component: FormulaireUtilisateur },
  { path: 'liste-utilisateur', component: ListeUtilisateur },
  { path: '**', redirectTo: 'accueil' }
];
