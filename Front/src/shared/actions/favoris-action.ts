import { Pollution } from '../../app/services/pollution';

export class AjouterFavori {
  static readonly type = '[Favoris] Ajouter';
  constructor(public payload: Pollution) {}
}

export class RetirerFavori {
  static readonly type = '[Favoris] Retirer';
  constructor(public id: number) {}
}

export class ViderFavoris {
  static readonly type = '[Favoris] Vider';
}