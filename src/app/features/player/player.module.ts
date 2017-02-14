import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PlayerRoutingModule } from './player.routing';
import { PlayerFormComponent, PlayerDetailsComponent } from './components';
import { PlayerComponent } from './player.component';
import { ViewPlayerComponent } from './view-player/view-player.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { AuthGuard } from '../../services/auth-guard';

@NgModule({
  declarations: [
    PlayerComponent,
    PlayerFormComponent,
    ViewPlayerComponent,
    EditPlayerComponent,
    PlayerDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    PlayerRoutingModule
    
  ],
  providers: [ 
    AuthGuard 
  ]
})
export class PlayerModule { }
