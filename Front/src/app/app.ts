import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormulairePollution } from "./formulaire-pollution/formulaire-pollution";
import { RecapitulatifFormulairePollution } from './recapitulatif-formulaire-pollution/recapitulatif-formulaire-pollution';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormulairePollution
    //RecapitulatifFormulairePollution
    ,
    RecapitulatifFormulairePollution
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  recevoirPollution: any = null;
  formulaireSoumis: boolean = false;

  recevoirSaisisUtilisateurFormulaire(data: any) {
    this.recevoirPollution = data;
    this.formulaireSoumis = true;
  }
  
}
