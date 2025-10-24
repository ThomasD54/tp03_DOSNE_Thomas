import { Component } from '@angular/core';
import { FormulairePollution } from '../../formulaire-pollution/formulaire-pollution';

@Component({
  selector: 'app-ajouter-pollution',
  imports: [FormulairePollution],
  templateUrl: './ajouter-pollution.html',
  styleUrl: './ajouter-pollution.css',
  standalone: true
})
export class AjouterPollution {

}
