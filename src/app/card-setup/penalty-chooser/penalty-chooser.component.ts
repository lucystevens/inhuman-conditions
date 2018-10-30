import { Component, OnInit, Input } from '@angular/core';
import { GameSetup, Penalty } from '../../card-definitions';
import { CardService } from '../../card.service';

@Component({
  selector: 'app-penalty-chooser',
  templateUrl: './penalty-chooser.component.html',
  styleUrls: ['./penalty-chooser.component.css']
})
export class PenaltyChooserComponent implements OnInit {

  @Input() setup: GameSetup;

  penalties : Penalty[];
  error: string;

  constructor(private cards : CardService) { }

  ngOnInit() {
    this.penalties = this.cards.getPenalties();
  }

  selectPenalty(penalty: Penalty){
    this.setup.penalty = penalty;
    this.error = "";
  }

  validateStep(){
    if(this.setup.penalty){
      this.setup.step = 2;
    }
    else{
      this.error = "You must select a penalty before proceding."
    }
  }

}
