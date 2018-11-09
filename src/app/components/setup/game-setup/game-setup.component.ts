import { Component, OnInit, Inject } from '@angular/core';
import { GameSetup } from 'src/app/domain/card-definitions';
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

  getSuspectLink() : string {
    if(!this.url){
      this.url = this.setupService.encodeGame(this.setup);
    }
    let baseUrl = this.document.location.origin;
    baseUrl += this.document.location.pathname.replace("setup", "suspect/");
    return baseUrl + this.url;
  }

  getInvestigatorLink() : string {
    if(!this.url){
      this.url = this.setupService.encodeGame(this.setup);
    }
    return "/investigator/" + this.url;
  }

  copy(inputElement){
    this.copied = true;
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

}
