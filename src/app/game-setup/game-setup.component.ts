import { Component, OnInit } from '@angular/core';
import {CardService} from '../card.service'
import { Penalty } from '../card-definitions';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {

  step: Number;

  penalties : Penalty[];

  constructor(private cards : CardService) { }

  ngOnInit() {
    this.penalties = this.cards.getPenalties();
  }



}
