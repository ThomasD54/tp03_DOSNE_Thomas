import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recapitulatif-formulaire-pollution',
  imports: [
    CommonModule,
  ],
  templateUrl: './recapitulatif-formulaire-pollution.html',
  styleUrl: './recapitulatif-formulaire-pollution.css',
  standalone: true
})
export class RecapitulatifFormulairePollution {
  // Récéption des donnée émise par le compostant parent
  @Input() saisisUtilisateurFormulaire: any;

}
