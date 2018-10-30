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

  selected: Penalty;
  discarded: boolean;
  error: string;

  constructor(private cards : CardService) { }

  ngOnInit() {
    this.penalties = this.cards.getPenalties();
  }

  selectPenalty(penalty: Penalty){
    this.selected = penalty;
    this.error = "";
  }

  discardPenalty(){
    if(this.selected){
      // Remove selected penalty from array
      var index = this.penalties.indexOf(this.selected);
      this.penalties.splice(index, 1); 

      this.selected = null;
      this.discarded = true;
    }
    else{
      this.error = "You must select a penalty to discard."
    }
  }

  validateStep(){
    if(this.selected){
      this.setup.step = 2;
      this.setup.penalty = this.selected;
    }
    else{
      this.error = "You must select a penalty before proceding."
    }
  }

}
