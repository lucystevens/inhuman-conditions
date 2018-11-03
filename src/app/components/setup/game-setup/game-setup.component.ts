import { Component, OnInit, Inject } from '@angular/core';
import { GameSetup } from 'src/app/card-definitions';
import { GameService } from 'src/app/services/game.service';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {

  setup: GameSetup;
  private url: string;
  copied: boolean;

  constructor(private setupService: GameService,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.setup = new GameSetup();
    this.setup.step = 1;
  }

  getURL() : string {
    if(!this.url){
      const baseUrl = this.document.location.origin + "/suspect/";
      this.url = baseUrl + this.setupService.encodeGame(this.setup);
    }
    return this.url;
  }

  copy(inputElement){
    this.copied = true;
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

}
