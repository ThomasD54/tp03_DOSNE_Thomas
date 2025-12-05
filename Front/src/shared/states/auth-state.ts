import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AuthConnexion, AuthDeconnexion } from '../actions/auth-action';

export interface AuthStateModel {
  utilisateur: any | null;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    utilisateur: null
  }
})
export class AuthState {

  @Selector()
  static utilisateur(state: AuthStateModel) {
    return state.utilisateur;
  }

  @Selector()
  static estConnecte(state: AuthStateModel) {
    return state.utilisateur !== null;
  }

  @Action(AuthConnexion)
  connexion(ctx: StateContext<AuthStateModel>, action: AuthConnexion) {
    ctx.patchState({ utilisateur: action.payload.utilisateur });
  }

  @Action(AuthDeconnexion)
  deconnexion(ctx: StateContext<AuthStateModel>) {
    ctx.patchState({ utilisateur: null });
  }
}
