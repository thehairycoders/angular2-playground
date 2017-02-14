import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { IAuthCredentials, LoginStatus } from '../../../models';
import { AuthActions } from '../../../store/actions';
import * as RootStore from '../../../store';
import { AuthState } from '../../../store/reducers/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  loading: boolean = false;

  constructor(
    private store: Store<RootStore.AppState>,
    private authActions: AuthActions,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.store.select(store => store.authState).subscribe(state => {

      this.toggleLoader(state.loginStatus);

      this.redirectIfLoggedIn(state);

    });

  }

  register(authCredentials: IAuthCredentials): void {

    this.store.dispatch(this.authActions.registerUser(authCredentials));

  }

  private redirectIfLoggedIn(state: AuthState): void {
    if (state.loginStatus === LoginStatus.loggedIn) this.router.navigate(['player']);
  }

  private toggleLoader(loginStatus: LoginStatus): void {
    this.loading = loginStatus === LoginStatus.registering;
  }

}
