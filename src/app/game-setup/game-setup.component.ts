import { Component, OnInit } from '@angular/core';
import {CardService} from '../card.service'
import {PacketService} from '../packet.service'
import { Penalty, Packet, SuspectRole, RoleType, SuspectNote, InvestigatorInquiry, GameSetup } from '../card-definitions';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {

  setup: GameSetup;

  packets : Packet[];
  roles: SuspectRole[];
  notes: SuspectNote[];

  constructor(private cards : CardService,
              private packetService: PacketService) { }

  ngOnInit() {
    this.setup = new GameSetup();
    this.setup.step = 1;
    
    this.packets = this.cards.getPackets();
    this.notes = this.cards.getSuspectNotes();
  }

  selectPacket(packet: Packet){
    this.setup.packet = packet;
  }

  selectRole(role: SuspectRole){
    this.setup.role = role;
  }

  fetchRole() {
    this.setup.role = this.packetService.getSuspectRole(this.setup.packet);
    this.roles = [this.setup.role];
  }

  fetchRoles() {
    this.roles = this.packetService.getSuspectRoles(this.setup.packet);
  }

  getRoleType(role: SuspectRole): RoleType {
    return this.cards.getRoleType(role);
  } 

  selectNote(note: SuspectNote){
    this.setup.note = note;
  }

  selectPrimaryInquiry(inquiry: InvestigatorInquiry) {
    // If none selected then select in first slot
    if(!this.setup.primaryInquiry1) {
      this.setup.primaryInquiry1 = inquiry;
    }
    // If one selected then select in second slot
    else if(!this.setup.primaryInquiry2) {
      this.setup.primaryInquiry2 = inquiry;
    }
    // If both selected then deselect first slot, move
    // second up and select in second slot
    else {
      this.setup.primaryInquiry1 = this.setup.primaryInquiry2;
      this.setup.primaryInquiry2 = inquiry;
    }
  }

  selectSecondaryInquiry(inquiry: InvestigatorInquiry) {
    // If none selected then select in first slot
    if(!this.setup.secondaryInquiry1) {
      this.setup.secondaryInquiry1 = inquiry;
    }
    // If one selected then select in second slot
    else if(!this.setup.secondaryInquiry2) {
      this.setup.secondaryInquiry2 = inquiry;
    }
    // If both selected then deselect first slot, move
    // second up and select in second slot
    else {
      this.setup.secondaryInquiry1 = this.setup.secondaryInquiry2;
      this.setup.secondaryInquiry2 = inquiry;
    }
  }

  isSelected(inquiry: InvestigatorInquiry): boolean {
    return inquiry === this.setup.primaryInquiry1 ||
           inquiry === this.setup.primaryInquiry2 ||
           inquiry === this.setup.secondaryInquiry1 ||
           inquiry === this.setup.secondaryInquiry2;
  }

  getStateForStep(step: number): string {
    if(this.setup.step > step){
      return "complete";
    }
    else if(this.setup.step === step){
      return "active";
    }
    else return "incomplete";
  }

}
