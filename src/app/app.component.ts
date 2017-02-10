import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { AuthActions } from './store/actions';
import * as RootStore from './store';
import { LoginStatus } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 

  loggedIn: boolean = false;

  constructor(
    private store: Store<RootStore.AppState>,
    private authActions: AuthActions,
    private router: Router) { }

  ngOnInit() { 

    this.store.select(store => store.authState).subscribe(authState => {
      this.loggedIn = authState.loginStatus === LoginStatus.loggedIn;      
    });

  }

  logout() {    

    this.store.dispatch(this.authActions.logOutUser());
    this.router.navigate(['login']);
    
  }

}
