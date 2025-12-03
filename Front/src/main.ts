import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { provideRouter, RouteConfigLoadEnd } from '@angular/router';
import { routes } from './app/app.routes';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { FavorisState } from '../src/shared/states/favoris-state';

bootstrapApplication(App, 
{
  providers: 
  [
    // permet l'utilisation de HttpClient dans toute l'application
    provideHttpClient(),
    // Pour les formulaires réactifs
    importProvidersFrom(ReactiveFormsModule),
    // Pour la navigation (surrement utile pour plus tard) -------------------------------
    provideRouter(routes),
    // Pour le gestionnaire d'états
    importProvidersFrom(
      NgxsModule.forRoot([FavorisState]),
      NgxsStoragePluginModule.forRoot({ keys: ['favoris'] })
    )
  ]
}).catch((err) => console.error(err));