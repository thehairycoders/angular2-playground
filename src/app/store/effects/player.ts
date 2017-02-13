import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { PlayerActions } from '../actions';
import { IPlayer } from '../../models';
import { AuthService, PlayerService } from '../../services';

@Injectable()
export class PlayerEffects {

    constructor(
        private actions$: Actions,
        private playerActions: PlayerActions,
        private authService: AuthService,
        private playerService: PlayerService
    ) { }

    @Effect() login$ = this.actions$
        .ofType(PlayerActions.GET_PLAYER_RECEIVED)        
        .switchMap(() => 
            this.authService.angularFire.auth
                .switchMap(authState => {
         
                    if(authState) {
                        return this.playerService.getPlayer(authState.uid)
                            .switchMap((player) => Observable.of(this.playerActions.getPlayerSuccess(player)))
                            .catch(error => Observable.of(this.playerActions.getPlayerFailure(error.message)));
                    }
                    else {
                        return Observable.of({ type: PlayerActions.GET_PLAYER_FAILURE, payload: 'Cannot find user ID' });
                    }

                })
                .catch(error => Observable.of({ type: PlayerActions.GET_PLAYER_FAILURE, payload: 'You must be logged in' }))
        );

    @Effect() updatePlayer$ = this.actions$
        .ofType(PlayerActions.UPDATE_PLAYER_RECEIVED)
        .map(toPayload)
        .switchMap(payload => 
            Observable.fromPromise(<Promise<void>>this.playerService.updatePlayer(payload.key,payload.data))
            .switchMap(() => Observable.of({type: PlayerActions.UPDATE_PLAYER_SUCCESS}))
            .catch(error => Observable.of({type: PlayerActions.UPDATE_PLAYER_FAILURE}))
        );

        
    @Effect() setPlayerStateToIdle$ = this.actions$
        .ofType(PlayerActions.UPDATE_PLAYER_SUCCESS, PlayerActions.UPDATE_PLAYER_FAILURE, PlayerActions.GET_PLAYER_FAILURE, PlayerActions.GET_PLAYER_SUCCESS)
        .switchMap(() => Observable.of({type: PlayerActions.SET_PLAYER_STATUS_IDLE}));

}