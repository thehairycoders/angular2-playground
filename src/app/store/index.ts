import { NgModule } from '@angular/core';
import { compose } from '@ngrx/core/compose';
import { StoreModule, combineReducers } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { EffectsModule } from '@ngrx/effects';

import { AuthActions, NotifyActions } from './actions';
import { AuthEffects, NotifyEffects } from './effects';
import * as fromAuth from './reducers/auth';
import * as fromNotify from './reducers/notify';

export interface AppState {
  authState: fromAuth.AuthState,
  notifyState: fromNotify.NotifyState
};

export const actions = [
  AuthActions,
  NotifyActions
];

export const composeStore = compose(storeLogger(), combineReducers)({
  authState: fromAuth.default,
  notifyState: fromNotify.default
});

export function reducer(state: any, action: any) {
 return composeStore(state, action);
}

@NgModule({
  imports: [
    StoreModule.provideStore(reducer),
    EffectsModule.run(AuthEffects),
    EffectsModule.run(NotifyEffects)
  ],
  declarations: [],
  exports: [],
  providers: [...actions]
})

export class SharedStoreModule { };
