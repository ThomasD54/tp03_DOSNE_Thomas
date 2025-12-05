export class AuthConnexion {
  static readonly type = '[Auth] Connexion';
  constructor(public payload: { utilisateur: any }) {}
}

export class AuthDeconnexion {
  static readonly type = '[Auth] Deconnexion';
}