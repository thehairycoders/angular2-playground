import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from "@ngrx/store";
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedStoreModule } from './store';
import { AppComponent } from './app.component';
import { AuthService, NotifyService, PlayerService, UtilsService } from './services';
import { NotifyComponent, ToolbarComponent } from './components';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NotifyComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, environment.firebaseAuthConfig),
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    SharedStoreModule,
    AppRoutingModule
  ],
  providers: [
    StoreModule,
    AuthService,
    NotifyService,
    PlayerService,
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
