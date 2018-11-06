import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/card.service';
import { PacketService } from 'src/app/packet.service';
import { SuspectRole, InvestigatorInquiry, Packet } from 'src/app/card-definitions';
import { RandomService } from 'src/app/random.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  packet: Packet;

  constructor(private cards: CardService, private packets: PacketService, private random: RandomService) { }

  ngOnInit() {
    this.getRandomPacket();
  }

  getRandomPacket(){
    const packets = this.cards.getPackets();
    const packetNo = this.random.getRandomNumber(0, packets.length);
    this.packet = packets[packetNo];
  }

  getHumanRole(): SuspectRole {
    return this.cards.getPackets()[0].roleCards[0];
  }

  getPatientRobot(): SuspectRole{
    let patient = [];
    for(const role of this.packet.roleCards){
      if(role.type == 3){
        patient.push(role);
      }
    }
    this.random.shuffleArray(patient);

    return patient[0];
  }

  getViolentRobot(): SuspectRole {
    let violent = [];
    for(const role of this.packet.roleCards){
      if(role.type == 2){
        violent.push(role);
      }
    }

    this.random.shuffleArray(violent);
    return violent[0];
  }

  getPrimaryInquiry(): InvestigatorInquiry {
    const primary = this.packet.primaryInquiries;
    const primaryNo = this.random.getRandomNumber(0, primary.length);
    return primary[primaryNo];
  }

  getSecondaryInquiry(): InvestigatorInquiry {
    const secondary = this.packet.secondaryInquiries;
    const secondaryNo = this.random.getRandomNumber(0, secondary.length);
    return secondary[secondaryNo];
  }

  smoothScroll(element: Element){
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
