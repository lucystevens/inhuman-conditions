import { Injectable } from '@angular/core';
import {Penalty, Packet, RoleType, SuspectNote, SuspectRole, InvestigatorInquiry} from './card-definitions';
import {PENALTIES, PACKETS, ROLE_TYPES, SUSPECT_NOTES} from './card-objects';
import {RandomService} from './random.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private random: RandomService) { }

  /**
   * Gets three distinct, randomly chosen penalties
   */
  getPenalties(): Penalty[] {
    const nums = this.random.getRandomNumbers(0, PENALTIES.length, 3);
    return [PENALTIES[nums[0]], PENALTIES[nums[1]], PENALTIES[nums[2]]];
  }

  /**
   * Gets a specific penalty
   * @param id The id of the penalty
   */
  getPenalty(id: number): Penalty {
    for (const penalty of PENALTIES){
      if (penalty.id === id) {
        return penalty;
      }
    }
    return null;
  }

  /**
   * Gets all available packets
   */
  getPackets(): Packet[] {
    return PACKETS;
  }

  /**
   * Gets a specific packet
   * @param id The id of the packet
   */
  getPacket(id: number): Packet {
    for (const packet of PACKETS) {
      if (packet.id === id) {
        return packet;
      }
    }
    return null;
  }

  /**
   * Gets a specific role, in a specific packet
   * @param roleId The id of the role to retrieve
   * @param packetId The packet to retrieve the role from
   */
  getSuspectRole(roleId: number, packetId: number): SuspectRole {
    const packet = this.getPacket(packetId);
    for (const role of packet.roleCards) {
      if(role.id === roleId){
        return role;
      }
    }
    return null;
  }

  /**
   * Gets the type of a Suspect role
   * @param role The SuspectRole
   */
  getRoleType(role: SuspectRole): RoleType {
    const id = role.type;
    for (const type of ROLE_TYPES) {
      if(type.id === id){
        return type;
      }
    }
    return null;
  }

  /**
   * Gets two distinct, random suspect notes
   */
  getSuspectNotes(): SuspectNote[] {
    const nums = this.random.getRandomNumbers(0, SUSPECT_NOTES.length, 2);
    return [SUSPECT_NOTES[nums[0]], SUSPECT_NOTES[nums[1]]];
  }

  /**
   * Gets a specific Suspect Note
   * @param id The id of the note
   */
  getSuspectNote(id: number): SuspectNote {
    for (const note of SUSPECT_NOTES){
      if(note.id === id){
        return note;
      }
    }
    return null;
  }

  /**
   * Gets a specific primary inquiry from a packet
   * @param id The id of the primary inquiry
   * @param packetId The id of the packet to retrieve the inquiry from
   */
  getPrimaryInquiry(id: number, packetId: number): InvestigatorInquiry {
    const packet = this.getPacket(packetId);
    for (const inquiry of packet.primaryInquiries){
      if(inquiry.id === id){
        return inquiry;
      }
    }
  } 

    /**
   * Gets a specific secondary inquiry from a packet
   * @param id The id of the secondary inquiry
   * @param packetId The id of the packet to retrieve the inquiry from
   */
  getSecondaryInquiry(id: number, packetId: number): InvestigatorInquiry {
    const packet = this.getPacket(packetId);
    for (const inquiry of packet.secondaryInquiries){
      if(inquiry.id === id){
        return inquiry;
      }
    }
  } 

}
