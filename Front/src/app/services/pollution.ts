import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pollution 
{
  // L'ID sera géré automatiquement par json-server
  id?: number,
  titrePollution: string;
  typePollution: string;
  descriptionPollution: string;
  datePollution: string;
  lieuPollution: string;
  latitudePollution: number;
  longitudePollution: number;
  photo?: string;
}


@Injectable({
  providedIn: 'root'
})
export class ServicePollution 
{
  // URL du backend mocké (simuler)
  private apiUrl = 'https://apitemplate-latest-uhyg.onrender.com';

  constructor(private http: HttpClient) {}

  // Recuperation de toutes les pollutions
  recuperationToutePollution(): Observable<Pollution[]> 
  {
    return this.http.get<Pollution[]>(this.apiUrl + "/api/pollution");
  }

  // Recuperation d'une pollution specifique
  recuperationPollution(id: number): Observable<Pollution> 
  {
    return this.http.get<Pollution>(`${this.apiUrl}/${id}`);
  }

  // Ajouter une nouvelle pollution 
  ajouterPollution(p: Pollution): Observable<Pollution> 
  {
    return this.http.post<Pollution>(this.apiUrl, p);
  }

  // Met à jour une pollution
  majPollution(id: number, p:Pollution): Observable<Pollution> 
  {
    return this.http.put<Pollution>(`${this.apiUrl}/${id}`, p);
  }

  // Suppression d'une pollution
  suppressionPollution(id: number): Observable<void> 
  {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }



  
}
