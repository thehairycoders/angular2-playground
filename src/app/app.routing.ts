import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: '/player/details', pathMatch: 'full' },
    {
        path: '',
        loadChildren: 'app/features/utils/utils.module#UtilsModule',
    },  
    {
        path: '',
        loadChildren: 'app/features/auth/auth.module#AuthModule',
    },
    {
        path: 'player',
        loadChildren: 'app/features/player/player.module#PlayerModule',
    },
    { path: '**', redirectTo: '/page-not-found', pathMatch: 'full' },
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