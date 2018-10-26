import { Component, OnInit } from '@angular/core';
import {CardService} from '../card.service'
import {PacketService} from '../packet.service'
import { Penalty, Packet, SuspectRole, RoleType, SuspectNote } from '../card-definitions';

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

}
