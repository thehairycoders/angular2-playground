import { Action } from '@ngrx/store';
import { FirebaseAuthState } from 'angularfire2';

import { IAuthCredentials, LoginStatus } from '../../models';
import { AuthActions } from './../actions';

export interface AuthState {
    loginStatus: LoginStatus,
    authState: FirebaseAuthState,
    newlyRegistered: boolean
}

const initialState: AuthState = {
    loginStatus: LoginStatus.unknown,
    authState: null,
    newlyRegistered: false
};

export default function (state = initialState, action: Action): AuthState {

    switch (action.type) {

        case AuthActions.LOGIN_RECEIVED:
            return Object.assign({}, state, {
                loginStatus: LoginStatus.loggingIn,
            });

        case AuthActions.LOGIN_FAILURE:
            return Object.assign({}, state, {
                loginStatus: LoginStatus.loginFailed
            });

        case AuthActions.USER_AUTHENTICATED:
            return Object.assign({}, state, {
                loginStatus: LoginStatus.loggedIn,
                authState: action.payload
            });

        case AuthActions.USER_NOT_AUTHENTICATED:
            return Object.assign({}, state, {
                loginStatus: LoginStatus.loggedOut,
                authState: null
            });

        case AuthActions.LOGOUT_RECEIVED:
            return Object.assign({}, state, {
                loginStatus: LoginStatus.loggingOut,
            });

        case AuthActions.REGISTER_RECEIVED:
            return Object.assign({}, state, {
                loginStatus: LoginStatus.registering
            });

        case AuthActions.REGISTER_FAILURE:
            return Object.assign({}, state, {
                loginStatus: LoginStatus.registerFailed
            });

        case AuthActions.REGISTER_SUCCESS:
            return Object.assign({}, state, {
                newlyRegistered: true
            });

        default:
            return Object.assign({}, state);
    }

}