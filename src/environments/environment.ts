// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

import { AuthProviders, AuthMethods } from 'angularfire2';

export const environment = {
  production: false,  
  firebaseConfig: {
    apiKey: "AIzaSyDr8UUOYtk6k1tAQkSD7g6NARUTT7tJ5yk",
    authDomain: "angular2-playgound.firebaseapp.com",
    databaseURL: "https://angular2-playgound.firebaseio.com",
    storageBucket: "angular2-playgound.appspot.com",
    messagingSenderId: "873853581329"
  },
  firebaseAuthConfig: {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
  }
};
