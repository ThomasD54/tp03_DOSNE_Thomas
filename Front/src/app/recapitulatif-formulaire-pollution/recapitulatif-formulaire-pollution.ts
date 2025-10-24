import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Pollution } from '../services/pollution';

@Component({
  selector: 'app-recapitulatif-formulaire-pollution',
  imports: [
    CommonModule,
  ],
  templateUrl: './recapitulatif-formulaire-pollution.html',
  styleUrls: ['./recapitulatif-formulaire-pollution.css'],
  standalone: true
})
export class RecapitulatifFormulairePollution {
  // Récéption des donnée émise par le compostant parent
  @Input() pollution?: Pollution;

}
