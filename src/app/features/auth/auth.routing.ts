import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const AuthRouting = RouterModule.forChild([
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
]);