import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-liste-utilisateur',
  imports: [CommonModule],
  templateUrl: './liste-utilisateur.html',
  styleUrl: './liste-utilisateur.css'
})
export class ListeUtilisateur {
  utilisateurs: any[] = [];
}