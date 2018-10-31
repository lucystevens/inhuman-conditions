import { Component, OnInit, Input } from '@angular/core';
import { GameSetup, Packet } from '../../card-definitions';
import { CardService } from '../../card.service';
import { BaseChooser } from 'src/app/domain/base-chooser';

@Component({
  selector: 'app-packet-chooser',
  templateUrl: './packet-chooser.component.html',
  styleUrls: ['./packet-chooser.component.css']
})
export class PacketChooserComponent extends BaseChooser implements OnInit {

  packets : Packet[];
  error: string;

  constructor(private cards : CardService) {
    super();
  }

  ngOnInit() {
    this.packets = this.cards.getPackets();
  }

  selectPacket(packet: Packet){
    this.setup.packet = packet;
    this.error = "";
  }

  validateStep(){
    if(this.setup.packet){
      this.nextStep();
    }
    else{
      this.error = "You must select a packet before proceding."
    }
  }

}
