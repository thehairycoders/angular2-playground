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

  constructor( 
    private store: Store<RootStore.AppState>,
    private playerActions: PlayerActions) { }

  ngOnInit() { 

    this.store.dispatch(this.playerActions.getPlayer());

   }
  
}
