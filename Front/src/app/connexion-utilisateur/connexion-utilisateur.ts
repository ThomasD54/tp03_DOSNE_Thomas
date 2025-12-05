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
    console.log('Form submitted');
    if (this.formulaireGroup.invalid) return;

    const { login, pass } = this.formulaireGroup.value;
    console.log('Login:', login, 'Pass:', pass);

    this.serviceUtilisateur.verifierConnexion(login, pass).subscribe(utilisateur => {
      console.log('Réponse API:', utilisateur);
      if (utilisateur) {
        this.store.dispatch(new AuthConnexion({ utilisateur }));
        this.erreurConnexion = false;
      } else {
        this.erreurConnexion = true;
      }
    });
  }
}
