import { Action } from '@ngrx/store';
import { FirebaseAuthState, FirebaseObjectObservable } from 'angularfire2';

import { IAuthCredentials, LoginStatus } from '../../models';
import { PlayerActions } from './../actions';
import { IPlayer } from '../../models';

export interface PlayerState {
    player: FirebaseObjectObservable<IPlayer>
}

const initialState: PlayerState = {
    player: null
};

export default function (state = initialState, action: Action): PlayerState {

    switch (action.type) {

        case PlayerActions.GET_PLAYER_SUCCESS:
            return Object.assign({}, state, {
                player: action.payload,
            });

        case PlayerActions.GET_PLAYER_FAILURE:
            return Object.assign({}, state, {
                player: null
            });
   
        default:
            return Object.assign({}, state);
    }

}