import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-pollution',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './formulaire-pollution.html',
  styleUrl: './formulaire-pollution.css',
  standalone: true,
})
export class FormulairePollution {

  // Module pour passer les élements de l'utilisateur au composant recapitulatif-formulaire-pollution
  @Output() recapitulatif = new EventEmitter<any>();


  // Liste déroulante des différents type de pollution :
  typeDePollutions = [
    'Plastique',
    'Chimique',
    'Dépôt sauvage',
    'Eau',
    'Air',
    'Autre'
  ];
  
  formulaireGroup = new FormGroup({
    titrePollution: new FormControl('', [Validators.required]),
    typePollution: new FormControl(null, [Validators.required]),
    descriptionPollution: new FormControl('', [Validators.required]),
    datePollution: new FormControl(null, [Validators.required]),
    lieuPollution: new FormControl('', [Validators.required]),
    latitudePollution: new FormControl(null, [Validators.required]),
    longitudePollution: new FormControl(null, [Validators.required]),
    photoPollution: new FormControl('')
    });
  


  onSubmit() {
    if (this.formulaireGroup.valid) {
      console.log('formulaire valide', this.formulaireGroup.value);
      this.recapitulatif.emit(this.formulaireGroup.value);
      this.formulaireGroup.reset();
    }
    else {
      console.log('formulaire invalide');
      this.formulaireGroup.markAllAsTouched();
    }
  }


  




}