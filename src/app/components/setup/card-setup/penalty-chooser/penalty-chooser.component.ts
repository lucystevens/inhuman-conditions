import { Component, OnInit } from '@angular/core';
import { Penalty } from 'src/app/domain/card-definitions';
import { CardService } from 'src/app/services/card.service';
import { BaseChooser } from 'src/app/domain/base-chooser';

@Component({
  selector: 'app-penalty-chooser',
  templateUrl: './penalty-chooser.component.html',
  styleUrls: ['./penalty-chooser.component.css']
})
export class PenaltyChooserComponent extends BaseChooser implements OnInit {

  penalties : Penalty[];

  selected: Penalty;
  discarded: boolean;
  error: string;

  constructor(private cards : CardService) {
    super();
  }

  ngOnInit() {
    this.penalties = this.cards.getPenalties();
    this.smoothScroll("#top");
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
      this.setup.penalty = this.selected;
      this.nextStep();
    }
    else{
      this.error = "You must select a penalty before proceding."
    }
  }

}
