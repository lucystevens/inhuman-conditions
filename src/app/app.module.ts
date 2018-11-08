import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameSetupComponent } from './components/setup/game-setup/game-setup.component';
import { SetupStageComponent } from './components/setup/setup-stage/setup-stage.component';
import { PenaltyChooserComponent } from './components/setup/card-setup/penalty-chooser/penalty-chooser.component';
import { PacketChooserComponent } from './components/setup/card-setup/packet-chooser/packet-chooser.component';
import { RoleChooserComponent } from './components/setup/card-setup/role-chooser/role-chooser.component';
import { NoteChooserComponent } from './components/setup/card-setup/note-chooser/note-chooser.component';
import { InquiryChooserComponent } from './components/setup/card-setup/inquiry-chooser/inquiry-chooser.component';
import { SwitchPlayerModalComponent } from './components/switch-player-modal/switch-player-modal.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RoleCardComponent } from './components/cards/role-card/role-card.component';
import { SuspectViewComponent } from './components/suspect-view/suspect-view.component';
import { CardElementComponent } from './components/cards/card-element/card-element.component';
import { InquiryCardComponent } from './components/cards/inquiry-card/inquiry-card.component';
import { InvestigatorViewComponent } from './components/investigator-view/investigator-view.component';
import { RulesComponent } from './components/rules/rules.component';

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
    CardElementComponent,
    InquiryCardComponent,
    InvestigatorViewComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
