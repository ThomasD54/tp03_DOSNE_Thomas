import { Component } from '@angular/core';
import { Pollution, ServicePollution } from './services/pollution';
import { FormulairePollution } from './formulaire-pollution/formulaire-pollution';
import { FormulaireUtilisateur } from './formulaire-utilisateur/formulaire-utilisateur';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState } from '../shared/states/auth-state';
import { Utilisateur } from './services/utilisateur';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  afficherFormulaire = false;
  pollutionEnCours?: Pollution;
  pollutions: Pollution[] = [];
  pollutionEnConsultation?: Pollution;
  afficherPopup = false;

  constructor(private pollutionService: ServicePollution, public router: Router) {}

  ngOnInit(): void {
    this.chargerPollutions();
  }

  allerAccueil() {
  this.router.navigate(['/accueil']);
  }

  creationUser() {
  this.router.navigate(['/formulaire-utilisateur']);
  }

  listeUser() {
  this.router.navigate(['/liste-utilisateur']);
}

  nouvellePollution() {
    this.pollutionEnCours = undefined;
    this.router.navigate(['/pollution/ajouter']);
  }

  modifierPollution(p: Pollution) {
    this.pollutionEnCours = { ...p };
    this.router.navigate([`/pollution/modifier/${p.id}`]);
  }

  gestionPollutionAjoutee() {
    this.chargerPollutions();
  }

  chargerPollutions() {
    this.pollutionService.recuperationToutePollution().subscribe(data => {
      this.pollutions = data;
    });
  }

  supprimerPollution(id: number) {
    if (confirm('Supprimer la pollution ?')) {
      this.pollutionService.suppressionPollution(id).subscribe(() => {
        this.pollutions = this.pollutions.filter(p => p.id !== id);
      });
    }
  }

  consulterPollution(id: number) {
    this.pollutionService.recuperationPollution(id).subscribe((p) => {
      this.pollutionEnConsultation = p;
      this.afficherPopup = true;
    });
  }

  fermerPopupPollution() {
    this.afficherPopup = false;
    this.pollutionEnConsultation = undefined;
  }

  @Select(AuthState.utilisateur) utilisateur$!: Observable<Utilisateur | null>;
}