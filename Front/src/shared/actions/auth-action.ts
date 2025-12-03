export class AuthConnexion {
  static readonly type = '[Auth] Connexion';
  constructor(public payload: { connexion: boolean }) {}
}