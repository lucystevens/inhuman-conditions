import { Component, OnInit } from '@angular/core';
import { GameSetup } from 'src/app/card-definitions';
import { GameService } from 'src/app/services/game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-investigator-view',
  templateUrl: './investigator-view.component.html',
  styleUrls: ['./investigator-view.component.css']
})
export class InvestigatorViewComponent implements OnInit {

  game: GameSetup;

  constructor(private route: ActivatedRoute,
              private games: GameService) { }

  ngOnInit() {
    this.parseGame();
  }

  parseGame(){
    const code = this.route.snapshot.paramMap.get('code');
    this.game = this.games.parseGame(code);
  }

}
