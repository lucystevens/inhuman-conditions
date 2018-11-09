import { Injectable } from '@angular/core';
import { GameSetup } from '../domain/card-definitions';
import { CardService } from './card.service';
import { RandomService } from './random.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private cards: CardService,
              private random: RandomService) {}

  /**
   * Parses an obfuscated code into a GameSetup object
   * @param code The obfuscated string representing a GameSetup object.
   * Note that the string is obfuscated to prevent players from accidentally realising
   * the suspect role when copying the URL and not to stop deliberate cheating.
   * @returns A fully populated GameSetup if valid, or null if not
   */
  parseGame(code: string): GameSetup {

    // Check that the format is valid
    if(!/^([a-h]\d{3}){8}$/.test(code)){
      return null;
    }

    // Split on characters, keeping them
    const ids = code.split(/(?=[a-h])/);
    ids.sort();

    const setup = new GameSetup();
    let packetId = 0;

    // For each id section parse the key (character) and id
    for(const val of ids){
      const key = val.substring(0,1);
      const id = this.parseId(val);

      if(key == "a"){
        setup.packet = this.cards.getPacket(id);
        packetId = setup.packet.id;
      }
      else if(key == "b"){
        setup.primaryInquiry1 = this.cards.getPrimaryInquiry(id, packetId);
      }
      else if(key == "c"){
        setup.role = this.cards.getSuspectRole(id, packetId);
      }
      else if(key == "d"){
        setup.primaryInquiry2 = this.cards.getPrimaryInquiry(id, packetId);
      }
      else if(key == "e"){
        setup.secondaryInquiry2 = this.cards.getSecondaryInquiry(id, packetId);
      }
      else if(key == "f"){
        setup.note = this.cards.getSuspectNote(id);
      }
      else if(key == "g"){
        setup.penalty = this.cards.getPenalty(id);
      }
      else if(key == "h"){
        setup.secondaryInquiry1 = this.cards.getSecondaryInquiry(id, packetId);
      }
      else{
        return null;
      }
    }

    if(this.validateGameSetup(setup)){
      return setup;
    }
    else{
      return null;
    }
  }

  // Parses the id from the code
  private parseId(code: string): number{
    return parseInt(code.substring(1));
  }

  // Ensures that no game setup fields are null
  private validateGameSetup(setup: GameSetup): boolean {
    return setup.penalty != null &&
           setup.packet != null &&
           setup.role != null &&
           setup.note != null &&
           setup.primaryInquiry1 !=null &&
           setup.primaryInquiry2 !=null &&
           setup.secondaryInquiry1 !=null &&
           setup.secondaryInquiry2 !=null;
  }

  /**
   * Encodes a GameSetup into an obfuscated string to be
   * sent as an URL param.
   * @param game The game to be encoded
   */
  encodeGame(game: GameSetup): string {
    let ids = [];

    ids.push("a" + game.packet.id);
    ids.push("b" + game.primaryInquiry1.id);
    ids.push("c" + game.role.id);
    ids.push("d" + game.primaryInquiry2.id);
    ids.push("e" + game.secondaryInquiry2.id);
    ids.push("f" + game.note.id);
    ids.push("g" + game.penalty.id);
    ids.push("h" + game.secondaryInquiry1.id);

    this.random.shuffleArray(ids);

    return ids.join("");
  }

}
