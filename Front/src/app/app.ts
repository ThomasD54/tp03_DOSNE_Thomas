import { Component } from '@angular/core';
import { Pollution, ServicePollution } from './services/pollution';
import { FormulairePollution } from './formulaire-pollution/formulaire-pollution';
import { FormulaireUtilisateur } from './formulaire-utilisateur/formulaire-utilisateur';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormulairePollution],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  afficherFormulaire = false;
  pollutionEnCours?: Pollution;
  pollutions: Pollution[] = [];
  pollutionEnConsultation?: Pollution;
  afficherPopup = false;

  //constructor(private pollutionService: ServicePollution) {}
  constructor(private pollutionService: ServicePollution, private router: Router) {}

  ngOnInit(): void {
    this.chargerPollutions();
  }

  allerAccueil() {
    this.afficherFormulaire = false;
  }

  creationUser() {
  this.router.navigate(['/formulaire-utilisateur']);
  }

  listeUser() {
  this.router.navigate(['/liste-utilisateur']);
  }

  nouvellePollution() {
    this.pollutionEnCours = undefined; // formulaire vide
    this.afficherFormulaire = true;
  }

  modifierPollution(p: Pollution) {
    this.pollutionEnCours = { ...p }; // copie pour ne pas modifier directement
    this.afficherFormulaire = true;
  }

  gestionPollutionAjoutee() {
    this.chargerPollutions();
    this.afficherFormulaire = false;
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
      // afficher le pop up pour la visualisation de la pollution
      this.afficherPopup = true;
    });
  }

  fermerPopupPollution() {
    this.afficherPopup = false;
    this.pollutionEnConsultation = undefined;
  }

}