import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { FirebaseAuthState, FirebaseObjectObservable } from 'angularfire2';

import { IPlayer } from '../../models';

@Injectable()
export class PlayerActions {
 
  static GET_PLAYER_RECEIVED = 'GET_PLAYER_RECEIVED';
  getPlayer(): Action {
    return {
      type: PlayerActions.GET_PLAYER_RECEIVED
    };
  }

  static GET_PLAYER_FAILURE = 'GET_PLAYER_FAILURE';
  getPlayerFailure(error: string): Action {
    return {
      type: PlayerActions.GET_PLAYER_FAILURE,
      payload: error
    };
  }

  static GET_PLAYER_SUCCESS = 'GET_PLAYER_SUCCESS';
  getPlayerSuccess(player: FirebaseObjectObservable<IPlayer>): Action {
    return {
      type: PlayerActions.GET_PLAYER_SUCCESS,
      payload: player
    };
  }

  static UPDATE_PLAYER_RECEIVED = "UPDATE_PLAYER_RECEIVED";
  updatePlayer(key: string, data: any): Action {
    return {
      type: PlayerActions.UPDATE_PLAYER_RECEIVED,
      payload: {key: key, data: data }
    }
  }

  static UPDATE_PLAYER_SUCCESS = "UPDATE_PLAYER_SUCCESS";
  updatePlayerSuccess(): Action {
    return {
      type: PlayerActions.UPDATE_PLAYER_SUCCESS
    }
  }

  static UPDATE_PLAYER_FAILURE = "UPDATE_PLAYER_FAILURE";
  updatePlayerFailure(error: string): Action {
    return {
      type: PlayerActions.UPDATE_PLAYER_FAILURE,
      payload: error
    };
  }

}