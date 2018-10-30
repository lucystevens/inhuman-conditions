import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameSetupComponent } from './game-setup/game-setup.component';
import { SetupStageComponent } from './setup-stage/setup-stage.component';
import { PenaltyChooserComponent } from './card-setup/penalty-chooser/penalty-chooser.component';
import { PacketChooserComponent } from './card-setup/packet-chooser/packet-chooser.component';
import { RoleChooserComponent } from './card-setup/role-chooser/role-chooser.component';
import { NoteChooserComponent } from './card-setup/note-chooser/note-chooser.component';

@NgModule({
  declarations: [
    AppComponent,
    GameSetupComponent,
    SetupStageComponent,
    PenaltyChooserComponent,
    PacketChooserComponent,
    RoleChooserComponent,
    NoteChooserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
