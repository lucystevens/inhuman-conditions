import { Component, OnInit } from '@angular/core';
import { GameSetup } from '../card-definitions';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {

  setup: GameSetup;
  private url: string;

  constructor(private setupService: GameService) { }

  ngOnInit() {
    this.setup = new GameSetup();
    this.setup.step = 1;
  }

  getURL() : string {
    if(!this.url){
      const baseUrl = "https://lukecmstevens/inhuman-conditions/suspect/";
      this.url = baseUrl + this.setupService.encodeGame(this.setup);
    }
    return this.url;
  }

  copy(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

}
