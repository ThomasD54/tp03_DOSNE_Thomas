import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Auth } from '../models/auth';
import { AuthConnexion } from '../actions/auth-action';

export interface AuthStateModel {
  connexion: boolean;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    connexion: false
  }
})
@Injectable()
export class AuthState {
  @Selector()
  static isConnected(state: AuthStateModel) {
    return state.connexion;
  }

  @Action(AuthConnexion)
  connexion(ctx: StateContext<AuthStateModel>, action: AuthConnexion) {
    ctx.patchState({ connexion: action.payload.connexion });
  }
}