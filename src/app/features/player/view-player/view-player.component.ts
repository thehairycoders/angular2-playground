import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs';

import { PlayerActions } from '../../../store/actions';
import * as RootStore from '../../../store';
import { IPlayer } from '../../../models';

@Component({
  selector: 'app-view-player',
  templateUrl: './view-player.component.html',
  styleUrls: ['./view-player.component.css']
})
export class ViewPlayerComponent implements OnInit {

  player: FirebaseObjectObservable<IPlayer> = null;
  playerExists: boolean = true;

  constructor(
    private store: Store<RootStore.AppState>,
    private playerActions: PlayerActions, ) { }

  ngOnInit() {

    this.store.select(store => store.playerState).subscribe(playerState => {
      
      if(playerState.player) {       

        this.doesPlayerAlreadyExist(playerState.player)

        if(this.playerExists) this.player = playerState.player;
   
      }

    });

    //this.store.dispatch(this.playerActions.getPlayer());

  }

  private doesPlayerAlreadyExist(playerRef: any): boolean {
    return this.playerExists = playerRef.$exists();
  }

}
