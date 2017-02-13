import { Action } from '@ngrx/store';
import { FirebaseAuthState, FirebaseObjectObservable } from 'angularfire2';

import { IAuthCredentials, LoginStatus } from '../../models';
import { PlayerActions } from './../actions';
import { IPlayer } from '../../models';
import { PlayerStateStatus } from '../../models';

export interface PlayerState {
    player: FirebaseObjectObservable<IPlayer>,
    status: PlayerStateStatus

}

const initialState: PlayerState = {
    player: null,
    status: PlayerStateStatus.idle
};

export default function (state = initialState, action: Action): PlayerState {

    switch (action.type) {

        case PlayerActions.GET_PLAYER_RECEIVED:
            return Object.assign({}, state, {
                player: action.payload,
                status: PlayerStateStatus.getInProgress
            });

        case PlayerActions.GET_PLAYER_SUCCESS:
            return Object.assign({}, state, {
                player: action.payload,
                status: PlayerStateStatus.getSuccess
            });

        case PlayerActions.GET_PLAYER_FAILURE:
            return Object.assign({}, state, {
                player: null,
                status: PlayerStateStatus.getFailure
            });

        case PlayerActions.UPDATE_PLAYER_RECEIVED:
            return Object.assign({}, state, {
                status: PlayerStateStatus.updateInProgress
            });

        case PlayerActions.UPDATE_PLAYER_SUCCESS:
            return Object.assign({}, state, {
                status: PlayerStateStatus.updateSuccess
            });

        case PlayerActions.UPDATE_PLAYER_FAILURE:
            return Object.assign({}, state, {
                status: PlayerStateStatus.updateFailure
            });

        case PlayerActions.SET_PLAYER_STATUS_IDLE:
            return Object.assign({}, state, {
                status: PlayerStateStatus.idle
            });
   
        default:
            return Object.assign({}, state);
    }

}