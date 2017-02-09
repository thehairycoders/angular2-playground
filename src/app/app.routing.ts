import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, PlayerComponent, RegisterComponent } from './features';

const appRoutes: Routes = [
    { path: '', redirectTo: '/player', pathMatch: 'full' },  
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'player', component: PlayerComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }