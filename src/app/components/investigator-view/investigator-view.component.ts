import { Component, OnInit } from '@angular/core';
import { GameSetup } from 'src/app/card-definitions';
import { GameService } from 'src/app/services/game.service';
import { ActivatedRoute } from '@angular/router';
import {timer} from 'rxjs';

@Component({
  selector: 'app-investigator-view',
  templateUrl: './investigator-view.component.html',
  styleUrls: ['./investigator-view.component.css']
})
export class InvestigatorViewComponent implements OnInit {

  game: GameSetup;
  timer: number = 30000;
  decision: string;

  constructor(private route: ActivatedRoute,
              private games: GameService) { }

  ngOnInit() {
    this.parseGame();
  }

  parseGame(){
    const code = this.route.snapshot.paramMap.get('code');
    this.game = this.games.parseGame(code);
    this.game.step = 0;
  }

  startGame(){
    this.game.step = 1;
    this.startTimer();
  }

  private startTimer() {
    const interval = setInterval(() => {
      if(this.timer > 0) {
        this.timer -= 1000;
      } else {
        this.timer = 0;
      }
    }, 1000)
  }

}
