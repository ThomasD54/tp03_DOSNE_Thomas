import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { AuthConnexion } from '../../shared/actions/auth-actions';

@Component({
  selector: 'app-connexion-utilisateur',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './connexion-utilisateur.html'
})
export class ConnexionUtilisateur {
  formulaireGroup: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.formulaireGroup = this.fb.group({
      login: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.formulaireGroup.valid) {
      // Ici tu peux ajouter la logique de vérification du login/pass
      // Pour le TP, on simule la connexion
      this.store.dispatch(new AuthConnexion({ connexion: true }));
    }
  }
}
