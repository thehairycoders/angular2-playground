import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, PlayerComponent, RegisterComponent } from './features';
import { ViewPlayerComponent } from './features/player/view-player/view-player.component';
import { EditPlayerComponent } from './features/player/edit-player/edit-player.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/player/details', pathMatch: 'full' },  
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'player', component: PlayerComponent,
        children: [
            { path: 'details', component: ViewPlayerComponent },
            { path: 'edit', component: EditPlayerComponent }
        ]
 }
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