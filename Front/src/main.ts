import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { FavorisState } from '../src/shared/states/favoris-state';
import { AuthState } from '../src/shared/states/auth-state';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(ReactiveFormsModule),
    provideRouter(routes),
    importProvidersFrom([
      NgxsModule.forRoot([FavorisState, AuthState]),
      NgxsStoragePluginModule.forRoot({ keys: ['favoris', 'auth'] })
    ])
  ]
}).catch((err) => console.error(err));

