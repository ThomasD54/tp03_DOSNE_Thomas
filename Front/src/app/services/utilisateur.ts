import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface du modèle Utilisateur
export interface Utilisateur {
  id?: number;
  nom: string;
  prenom: string;
  login: string;
  motdepasse: string;
}

@Injectable({ providedIn: 'root' })
export class ServiceUtilisateur {
  private apiUrl = 'https://apitemplate-latest-uhyg.onrender.com';

  constructor(private http: HttpClient) {}

    // Récupérer tous les utilisateurs
    recuperationTousUtilisateurs(): Observable<Utilisateur[]> 
    {
        return this.http.get<Utilisateur[]>(this.apiUrl + "/api/utilisateurs");
    }

    // Ajouter un nouvel utilisateur
    ajouterUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> 
    {
        return this.http.post<Utilisateur>(this.apiUrl + "/api/utilisateurs", utilisateur);
    }
}