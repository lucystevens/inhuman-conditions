import { Component, OnInit } from '@angular/core';
import {CardService} from '../card.service'
import {PacketService} from '../packet.service'
import { Penalty, Packet, SuspectRole, RoleType, SuspectNote, InvestigatorInquiry } from '../card-definitions';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {

  step: Number;

  penalties : Penalty[];
  selectedPenalty : Penalty;

  packets : Packet[];
  selectedPacket : Packet;

  roles: SuspectRole[];
  selectedRole: SuspectRole;

  notes: SuspectNote[];
  selectedNote: SuspectNote;

  selectedPrimaryInquiry1: InvestigatorInquiry;
  selectedPrimaryInquiry2: InvestigatorInquiry;
  selectedSecondaryInquiry1: InvestigatorInquiry;
  selectedSecondaryInquiry2: InvestigatorInquiry;

  constructor(private cards : CardService,
              private packetService: PacketService) { }

  ngOnInit() {
    this.penalties = this.cards.getPenalties();
    this.packets = this.cards.getPackets();
    this.notes = this.cards.getSuspectNotes();
  }

  selectPenalty(penalty: Penalty){
    this.selectedPenalty = penalty;
  }

  selectPacket(packet: Packet){
    this.selectedPacket = packet;
  }

  selectRole(role: SuspectRole){
    this.selectedRole = role;
  }

  fetchRole() {
    this.selectedRole = this.packetService.getSuspectRole(this.selectedPacket);
    this.roles = [this.selectedRole];
  }

  fetchRoles() {
    this.roles = this.packetService.getSuspectRoles(this.selectedPacket);
  }

  getRoleType(role: SuspectRole): RoleType {
    return this.cards.getRoleType(role);
  } 

  selectNote(note: SuspectNote){
    this.selectedNote = note;
  }

  selectPrimaryInquiry(inquiry: InvestigatorInquiry) {
    // If none selected then select in first slot
    if(!this.selectedPrimaryInquiry1) {
      this.selectedPrimaryInquiry1 = inquiry;
    }
    // If one selected then select in second slot
    else if(!this.selectedPrimaryInquiry2) {
      this.selectedPrimaryInquiry2 = inquiry;
    }
    // If both selected then deselect first slot, move
    // second up and select in second slot
    else {
      this.selectedPrimaryInquiry1 = this.selectedPrimaryInquiry2;
      this.selectedPrimaryInquiry2 = inquiry;
    }
  }

  selectSecondaryInquiry(inquiry: InvestigatorInquiry) {
    // If none selected then select in first slot
    if(!this.selectedSecondaryInquiry1) {
      this.selectedSecondaryInquiry1 = inquiry;
    }
    // If one selected then select in second slot
    else if(!this.selectedSecondaryInquiry2) {
      this.selectedSecondaryInquiry2 = inquiry;
    }
    // If both selected then deselect first slot, move
    // second up and select in second slot
    else {
      this.selectedSecondaryInquiry1 = this.selectedSecondaryInquiry2;
      this.selectedSecondaryInquiry2 = inquiry;
    }
  }

  isSelected(inquiry: InvestigatorInquiry): boolean {
    return inquiry === this.selectedPrimaryInquiry1 ||
           inquiry === this.selectedPrimaryInquiry2 ||
           inquiry === this.selectedSecondaryInquiry1 ||
           inquiry === this.selectedSecondaryInquiry2;
  }

}
