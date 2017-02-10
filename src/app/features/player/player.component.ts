import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { PlayerActions } from '../../store/actions';
import * as RootStore from '../../store';
import { IPlayer } from '../../models';
import { FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  playerKey: string;
  player: FirebaseObjectObservable<IPlayer> = null;
  playerFetched: boolean = false;

  constructor(
    private store: Store<RootStore.AppState>,
    private playerActions: PlayerActions, ) { }

  ngOnInit() {

    this.store.select(store => store.playerState).subscribe(playerState => {
      
      if(playerState.player) {
        
        this.playerFetched = true;  
        
        if(this.playerAlreadyExists(playerState.player)) this.player = playerState.player;

        this.savePlayerKey(playerState.player);

      }

    });

    this.store.dispatch(this.playerActions.getPlayer());

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

}
