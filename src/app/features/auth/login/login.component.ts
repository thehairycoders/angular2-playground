import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { IAuthCredentials, LoginStatus } from '../../../models';
import { AuthActions } from '../../../store/actions';
import * as RootStore from '../../../store';
import { AuthState } from '../../../store/reducers/auth';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;
  targetIfAuthorised: string;

  constructor(
    private store: Store<RootStore.AppState>,
    private authActions: AuthActions,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.setTargetRouteIfAuthorised();

    this.store.select(store => store.authState).subscribe(state => {

      this.toggleLoader(state.loginStatus);

      if (this.isUserLoggedIn(state)) this.redirectToAuthorisedTarget();

    });

  }

  login(authCredentials: IAuthCredentials): void {
    this.store.dispatch(this.authActions.loginUser(authCredentials));
  }

  private setTargetRouteIfAuthorised() {
    this.route.queryParams.subscribe(params => this.targetIfAuthorised = params['redirect_url'] || 'player/details');
  }

  private isUserLoggedIn(state: AuthState): boolean {
    return state.loginStatus === LoginStatus.loggedIn;
  }

  private redirectToAuthorisedTarget(): void {
      this.router.navigate([this.targetIfAuthorised]);
  }

  private toggleLoader(loginStatus: LoginStatus): void {
    this.loading = loginStatus === LoginStatus.loggingIn || loginStatus === LoginStatus.loggingOut;
  }

}
