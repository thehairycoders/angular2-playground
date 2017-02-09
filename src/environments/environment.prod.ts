import { AuthProviders, AuthMethods } from 'angularfire2';

export const environment = {
  production: true,  
  firebaseConfig:  {
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