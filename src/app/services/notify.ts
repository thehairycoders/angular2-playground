import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AngularFire, FirebaseAuthState, FirebaseAuth} from 'angularfire2';
import { Observable } from 'rxjs';

import { IAuthCredentials } from '../models';
import { AuthActions, PlayerActions } from '../store/actions';
import * as RootStore from '../store';

@Injectable()
export class NotifyService {

  constructor() {}

  getMessageForAction(actionType: string, message?: string): string {

    switch(actionType) {
      case AuthActions.LOGIN_FAILURE:
        return message ? message : "Failed to login";
      case AuthActions.REGISTER_FAILURE:
        return message ? message : "Failed to register";
      case AuthActions.REGISTER_SUCCESS:
        return message ? message: "Success!  Welcome to the Angular2 Playground";
      case PlayerActions.UPDATE_PLAYER_SUCCESS:
        return message ? message: "Success!";
      case PlayerActions.UPDATE_PLAYER_FAILURE:
        return message ? message: "Failed to update";
    }

  }

}