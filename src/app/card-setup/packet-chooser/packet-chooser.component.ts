import { Component, OnInit, Input } from '@angular/core';
import { GameSetup, Packet } from '../../card-definitions';
import { CardService } from '../../card.service';

@Component({
  selector: 'app-packet-chooser',
  templateUrl: './packet-chooser.component.html',
  styleUrls: ['./packet-chooser.component.css']
})
export class PacketChooserComponent implements OnInit {

  @Input() setup: GameSetup;

  packets : Packet[];
  error: string;

  constructor(private cards : CardService) { }

  ngOnInit() {
    this.packets = this.cards.getPackets();
  }

  selectPacket(packet: Packet){
    this.setup.packet = packet;
    this.error = "";
  }

  validateStep(){
    if(this.setup.packet){
      this.setup.step = 3;
    }
    else{
      this.error = "You must select a packet before proceding."
    }
  }

}
