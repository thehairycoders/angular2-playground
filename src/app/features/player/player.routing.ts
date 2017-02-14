import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './player.component';
import { ViewPlayerComponent } from './view-player/view-player.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { AuthGuard } from '../../services';


const routes: Routes = [
    {
        path: '', component: PlayerComponent, canActivate: [AuthGuard],
        children: [
            { path: 'details', component: ViewPlayerComponent },
            { path: 'edit', component: EditPlayerComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PlayerRoutingModule { }
