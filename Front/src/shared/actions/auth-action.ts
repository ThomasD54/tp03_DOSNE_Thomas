import { AuthConnexion } from '../../shared/actions/auth-action';

export class AuthConnexion {
  static readonly type = '[Auth] Connexion';
  constructor(public payload: { connexion: boolean }) {}
}