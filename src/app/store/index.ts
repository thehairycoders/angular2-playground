import { NgModule } from '@angular/core';
import { compose } from '@ngrx/core/compose';
import { StoreModule, combineReducers } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { EffectsModule } from '@ngrx/effects';

import { AuthActions } from './actions';
import { AuthEffects } from './effects';
import * as fromAuth from './reducers/auth';

export interface AppState {
  authState: fromAuth.AuthState;
};

export const actions = [
  AuthActions
];

export const composeStore = compose(storeLogger(), combineReducers)({
  authState: fromAuth.default
});

export function reducer(state: any, action: any) {
 return composeStore(state, action);
}

@NgModule({
  imports: [
    StoreModule.provideStore(reducer),
    EffectsModule.run(AuthEffects)
  ],
  declarations: [],
  exports: [],
  providers: [...actions]
})

export class SharedStoreModule { };
