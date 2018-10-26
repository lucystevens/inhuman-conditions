import { Component, OnInit } from '@angular/core';
import {CardService} from '../card.service'
import { Penalty, Packet } from '../card-definitions';

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

  constructor(private cards : CardService) { }

  ngOnInit() {
    this.penalties = this.cards.getPenalties();
    this.packets = this.cards.getPackets();
  }

  selectPenalty(penalty: Penalty){
    this.selectedPenalty = penalty;
  }

  selectPacket(packet: Packet){
    this.selectedPacket = packet;
  }

}
