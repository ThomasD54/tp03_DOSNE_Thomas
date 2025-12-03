import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { FavorisStateModel } from './favoris-state-model';
import { AjouterFavori, RetirerFavori, ViderFavoris } from '../actions/favoris-action';
import { Pollution } from '../../app/services/pollution';

@State<FavorisStateModel>({
  name: 'favoris',
  defaults: {
    favoris: []
  }
})
@Injectable()
export class FavorisState {
  @Selector()
  static favoris(state: FavorisStateModel) {
    return state.favoris;
  }

  @Selector()
  static count(state: FavorisStateModel) {
    return state.favoris.length;
  }

  @Action(AjouterFavori)
  ajouterFavori(ctx: StateContext<FavorisStateModel>, action: AjouterFavori) {
    const state = ctx.getState();
    if (!state.favoris.find(f => f.id === action.payload.id)) {
      ctx.patchState({ favoris: [...state.favoris, action.payload] });
    }
  }

  @Action(RetirerFavori)
  retirerFavori(ctx: StateContext<FavorisStateModel>, action: RetirerFavori) {
    const state = ctx.getState();
    ctx.patchState({ favoris: state.favoris.filter(f => f.id !== action.id) });
  }

  @Action(ViderFavoris)
  viderFavoris(ctx: StateContext<FavorisStateModel>) {
    ctx.patchState({ favoris: [] });
  }
}