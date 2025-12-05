import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AuthConnexion, AuthDeconnexion } from '../actions/auth-action';

export interface AuthStateModel {
  utilisateur: Utilisateur | null;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    utilisateur: null
  }
})
@Injectable()
export class AuthState {

  @Selector()
  static utilisateur(state: AuthStateModel) {
    return state.utilisateur;
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
