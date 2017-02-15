import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FirebaseObjectObservable } from 'angularfire2';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { PlayerActions } from '../../../store/actions';
import * as RootStore from '../../../store';
import { IPlayer, PlayerStateStatus } from '../../../models';
import { PlayerState } from '../../../store/reducers/player';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  playerKey: string;
  player: FirebaseObjectObservable<IPlayer> = null;
  playerFetched: boolean = false;
  loading: boolean = false;

  constructor(
    private store: Store<RootStore.AppState>,
    private playerActions: PlayerActions,
    private router: Router) { }

  ngOnInit() {

    this.store.select(store => store.playerState).subscribe(playerState => {

      if (playerState.player) {

        this.playerFetched = true;

        if (this.playerAlreadyExists(playerState.player)) this.player = playerState.player;

        this.savePlayerKey(playerState.player);

      }

      this.showLoader(playerState.status);

      this.redirectOnUpdateSuccess(playerState.status);

    });

  }

  updatePlayer(playerData): void {
    this.store.dispatch(this.playerActions.updatePlayer(this.playerKey, playerData));
  }

  private playerAlreadyExists(playerRef: any): boolean {
    return playerRef.$exists();
  }

  private savePlayerKey(playerRef: any): void {
    this.playerKey = playerRef.$key;
  }

  private showLoader(playerStatus: PlayerStateStatus): void {

    switch (playerStatus) {

      case PlayerStateStatus.updateInProgress:
      case PlayerStateStatus.getInProgress:
        this.loading = true;
        break;

      default:
        this.loading = false;

    }

  }

  private redirectOnUpdateSuccess(playerStatus: PlayerStateStatus): void {

    if (playerStatus === PlayerStateStatus.updateSuccess) {
      this.router.navigate(['../../player/details']);
    }
  }

}
