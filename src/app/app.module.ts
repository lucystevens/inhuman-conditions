import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameSetupComponent } from './game-setup/game-setup.component';
import { SetupStageComponent } from './setup-stage/setup-stage.component';
import { PenaltyChooserComponent } from './card-setup/penalty-chooser/penalty-chooser.component';
import { PacketChooserComponent } from './card-setup/packet-chooser/packet-chooser.component';
import { RoleChooserComponent } from './card-setup/role-chooser/role-chooser.component';
import { NoteChooserComponent } from './card-setup/note-chooser/note-chooser.component';
import { InquiryChooserComponent } from './card-setup/inquiry-chooser/inquiry-chooser.component';
import { SwitchPlayerModalComponent } from './switch-player-modal/switch-player-modal.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RoleCardComponent } from './components/role-card/role-card.component';
import { SuspectViewComponent } from './components/suspect-view/suspect-view.component';
import { CardElementComponent } from './components/card-element/card-element.component';

@NgModule({
  declarations: [
    AppComponent,
    GameSetupComponent,
    SetupStageComponent,
    PenaltyChooserComponent,
    PacketChooserComponent,
    RoleChooserComponent,
    NoteChooserComponent,
    InquiryChooserComponent,
    SwitchPlayerModalComponent,
    RoleCardComponent,
    SuspectViewComponent,
    CardElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
