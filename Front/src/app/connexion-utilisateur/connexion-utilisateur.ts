import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { AuthConnexion } from '../../shared/actions/auth-action';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceUtilisateur } from '../services/utilisateur';

@Component({
  selector: 'app-connexion-utilisateur',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './connexion-utilisateur.html',
  styleUrls: ['./connexion-utilisateur.css'],
  providers: [ServiceUtilisateur]
})
export class ConnexionUtilisateur {

  formulaireGroup: FormGroup;
  erreurConnexion = false;

  constructor(private fb: FormBuilder, private store: Store, private serviceUtilisateur: ServiceUtilisateur) {
    this.formulaireGroup = this.fb.group({
      login: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.formulaireGroup.invalid) return;

    const { login, pass } = this.formulaireGroup.value;

    this.serviceUtilisateur.verifierConnexion(login, pass).subscribe(utilisateur => {
      if (utilisateur) {
        this.store.dispatch(new AuthConnexion({ utilisateur }));
      } else {
        this.erreurConnexion = true;
      }
    });
  }
}
