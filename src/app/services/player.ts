import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AngularFire, FirebaseAuthState, FirebaseAuth, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs';

import { IPlayer } from '../models';

@Injectable()
export class PlayerService {

  constructor(public angularFire: AngularFire) { }

  getPlayer(key: string): FirebaseObjectObservable<IPlayer> {
    return this.angularFire.database.object(`/player/${key}`);
  }

  updatePlayer(key: string, playerData: any): firebase.Promise<void> {
    return this.angularFire.database.object(`/player/${key}`).update(playerData);
  }

}