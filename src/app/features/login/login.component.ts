import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { IAuthCredentials, LoginStatus } from '../../models';
import { AuthActions } from '../../store/actions';
import * as RootStore from '../../store';
import { AuthState } from '../../store/reducers/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

  login(authCredentials: IAuthCredentials): void {

    this.store.dispatch(this.authActions.loginUser(authCredentials));

  }

  private redirectIfLoggedIn(state: AuthState): void {

    if (state.loginStatus === LoginStatus.loggedIn) this.router.navigate(['player/details']);

  }

  private toggleLoader(loginStatus: LoginStatus): void {

    switch (loginStatus) {
      case LoginStatus.loggingIn:
      case LoginStatus.loggingOut:
        this.loading = true;
        break;
      default:
        this.loading = false;
    }

  }

}
