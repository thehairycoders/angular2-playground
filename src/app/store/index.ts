import { NgModule } from '@angular/core';
import { compose } from '@ngrx/core/compose';
import { StoreModule, combineReducers } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { EffectsModule } from '@ngrx/effects';

import { AuthActions, NotifyActions, PlayerActions } from './actions';
import { AuthEffects, NotifyEffects, PlayerEffects } from './effects';
import * as fromAuth from './reducers/auth';
import * as fromNotify from './reducers/notify';
import * as fromPlayer from './reducers/player';

export interface AppState {
  authState: fromAuth.AuthState,
  notifyState: fromNotify.NotifyState,
  playerState: fromPlayer.PlayerState
};

export const actions = [
  AuthActions,
  NotifyActions,
  PlayerActions
];

export const composeStore = compose(storeLogger(), combineReducers)({
  authState: fromAuth.default,
  notifyState: fromNotify.default,
  playerState: fromPlayer.default
});

export function reducer(state: any, action: any) {
 return composeStore(state, action);
}

@NgModule({
  imports: [
    StoreModule.provideStore(reducer),
    EffectsModule.run(AuthEffects),
    EffectsModule.run(NotifyEffects),
    EffectsModule.run(PlayerEffects)
  ],
  declarations: [],
  exports: [],
  providers: [...actions]
})

export class SharedStoreModule { };
