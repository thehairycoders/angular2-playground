import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AngularFire, FirebaseAuthState, FirebaseAuth} from 'angularfire2';
import { Observable } from 'rxjs';

import { IAuthCredentials } from '../models';
import { AuthActions } from '../store/actions';
import * as RootStore from '../store';

@Injectable()
export class AuthService {

  private uid: string = null;

  constructor(public angularFire: AngularFire,
    private authActions: AuthActions,
    private store: Store<RootStore.AppState>) {

    this.angularFire.auth.subscribe((auth: FirebaseAuthState) => {
      
      if(auth) {
        this.uid = auth.uid;
        this.store.dispatch(this.authActions.userAuthenticated(auth))
      }
      else {
        this.uid = null;
        this.store.dispatch(this.authActions.userNotAuthenticated());
      }
      
    });

  }

  get id(): string {
    return this.uid;
  }

  login(credentials: IAuthCredentials): Observable<any> {
    return Observable.fromPromise(<Promise<any>>this.angularFire.auth.login(credentials));
  }  

  resetPassword(email: string): Observable<any> {
    return Observable.fromPromise(<Promise<any>>firebase.auth().sendPasswordResetEmail(email));
  }

  logout(): void {
    this.angularFire.auth.logout();
  }

  register(credentials: IAuthCredentials): Observable<any> {
    return Observable.fromPromise(<Promise<any>>this.angularFire.auth.createUser(credentials));
  }

}