import { Component, OnInit } from '@angular/core';
import { Pollution, ServicePollution } from '../../services/pollution';
import { CommonModule, NgForOf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  imports: [NgForOf, CommonModule],
  templateUrl: './accueil.html',
  styleUrls: ['./accueil.css'],
  standalone: true
})

export class Accueil {
  pollutions: any[] = [];

constructor(private servicePollution: ServicePollution, private router: Router) {}

  allerAuFormulaire() {
    this.router.navigate(['/formulaire']);
  }

  ngOnInit() {
    this.chargerPollutions();
  }

  chargerPollutions() {
    this.servicePollution.recuperationToutePollution().subscribe((data) => {
      this.pollutions = data;
    });
  }

  supprimerPollution(id: number) {
    this.servicePollution.suppressionPollution(id).subscribe(() => {
      this.chargerPollutions();
    });
  }

}
