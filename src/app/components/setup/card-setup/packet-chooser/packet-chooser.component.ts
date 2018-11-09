import { Component, OnInit } from '@angular/core';
import { Packet } from 'src/app/card-definitions';
import { CardService } from 'src/app/services/card.service';
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
