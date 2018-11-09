import { Component, OnInit } from '@angular/core';
import { GameSetup, RoleType } from 'src/app/card-definitions';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-suspect-view',
  templateUrl: './suspect-view.component.html',
  styleUrls: ['./suspect-view.component.css']
})
export class SuspectViewComponent implements OnInit {

  game: GameSetup;
  roleType: RoleType;

  constructor(private route: ActivatedRoute,
              private games: GameService,
              private cards: CardService) { }

  ngOnInit() {
    this.parseGame();
  }

  parseGame(){
    const code = this.route.snapshot.paramMap.get('code');
    this.game = this.games.parseGame(code);
    this.roleType = this.cards.getRoleType(this.game.role);
  }
}
