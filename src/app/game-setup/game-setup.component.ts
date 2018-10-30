import { Component, OnInit } from '@angular/core';
import { GameSetup } from '../card-definitions';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {

  setup: GameSetup;

  constructor() { }

  ngOnInit() {
    this.setup = new GameSetup();
    this.setup.step = 1;
  }

}
