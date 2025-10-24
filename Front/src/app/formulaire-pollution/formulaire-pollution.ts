import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicePollution, Pollution } from '../services/pollution';
import { RecapitulatifFormulairePollution } from '../recapitulatif-formulaire-pollution/recapitulatif-formulaire-pollution';
import { SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-formulaire-pollution',
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './formulaire-pollution.html',
  styleUrls: ['./formulaire-pollution.css'],
  standalone: true,
})


export class FormulairePollution {

  // Formulaire principal
  formulaireGroup: FormGroup;

  // Pollution créée (pour l'affichage du récapitulatif)
  pollutionCreee?: Pollution;

  // Module pour passer les élements de l'utilisateur au composant recapitulatif-formulaire-pollution
  @Output() recapitulatif = new EventEmitter<any>();
  // evenement émis quand une pollution est ajoutée
  @Output() pollutionAjoutee = new EventEmitter<void>();

  @Input() pollution?: Pollution;


  ngOnChanges(changes: SimpleChanges): void {
    const pollutionChange = changes['pollution'];
    if (pollutionChange && pollutionChange.currentValue) {
      const p: Pollution = pollutionChange.currentValue;
      this.formulaireGroup.patchValue({
        titrePollution: p.titrePollution,
        typePollution: p.typePollution,
        descriptionPollution: p.descriptionPollution,
        datePollution: p.datePollution,
        lieuPollution: p.lieuPollution,
        latitudePollution: p.latitudePollution,
        longitudePollution: p.longitudePollution,
        photoPollution: p.photo || ''
      });
    }
  }


  // Liste déroulante des différents type de pollution :
  typeDePollutions = [
    'Plastique',
    'Chimique',
    'Dépôt sauvage',
    'Eau',
    'Air',
    'Autre'
  ];
  
  constructor(
    private fb: FormBuilder,
    // Injection du service de pollution
    private pollutionService: ServicePollution
  ) {
    // Création du formulaire pour les pollution via FormBuilder
    this.formulaireGroup = this.fb.group({
      titrePollution: ['', Validators.required],
      typePollution: [null, Validators.required],
      descriptionPollution: ['', Validators.required],
      datePollution: [null, Validators.required],
      lieuPollution: ['', Validators.required],
      latitudePollution: [null, Validators.required],
      longitudePollution: [null, Validators.required],
      photoPollution: ['']
    });
  }

onSubmit(): void {
  if (!this.formulaireGroup.valid) {
    console.log('formulaire invalide');
    this.formulaireGroup.markAllAsTouched();
    return;
  }

  const pollutionForm: Pollution = {
    ...this.pollution, // si on modifie, garde l'id
    titrePollution: this.formulaireGroup.value.titrePollution!,
    typePollution: this.formulaireGroup.value.typePollution!,
    descriptionPollution: this.formulaireGroup.value.descriptionPollution!,
    datePollution: this.formulaireGroup.value.datePollution!,
    lieuPollution: this.formulaireGroup.value.lieuPollution!,
    latitudePollution: this.formulaireGroup.value.latitudePollution!,
    longitudePollution: this.formulaireGroup.value.longitudePollution!,
    photo: this.formulaireGroup.value.photoPollution || ''
  };

  if (this.pollution?.id) {
    // 🔹 Modification
    this.pollutionService.majPollution(this.pollution.id, pollutionForm).subscribe({
      next: (result) => {
        this.pollutionAjoutee.emit();
        this.formulaireGroup.reset();
      },
      error: (err) => console.error('Erreur modification :', err)
    });
  } else {
    // 🔹 Ajout
    this.pollutionService.ajouterPollution(pollutionForm).subscribe({
      next: (result) => {
        this.pollutionCreee = result;
        this.recapitulatif.emit(result);
        this.pollutionAjoutee.emit();
        this.formulaireGroup.reset();
      },
      error: (err) => console.error('Erreur ajout pollution :', err)
    });
  }
}
}