import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameSetupComponent } from './game-setup/game-setup.component';
import { SetupStageComponent } from './setup-stage/setup-stage.component';

@NgModule({
  declarations: [
    AppComponent,
    GameSetupComponent,
    SetupStageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
