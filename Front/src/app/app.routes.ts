import { Routes } from '@angular/router';
import { FormulairePollution } from './formulaire-pollution/formulaire-pollution';
import { ListeDesPollutions } from './liste-des-pollutions/liste-des-pollutions';
import { FormulaireUtilisateur } from './formulaire-utilisateur/formulaire-utilisateur';
import { ListeUtilisateur } from './liste-utilisateur/liste-utilisateur';
import { ConnexionUtilisateur } from './connexion-utilisateur/connexion-utilisateur';

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: ListeDesPollutions },
  { path: 'pollution/ajouter', component: FormulairePollution },
  { path: 'formulaire-utilisateur', component: FormulaireUtilisateur },
  { path: 'liste-utilisateur', component: ListeUtilisateur },
  { path: 'connexion', component: ConnexionUtilisateur },
  { path: 'pollution/modifier/:id', component: FormulairePollution },
  { path: '**', redirectTo: 'accueil' }
];
