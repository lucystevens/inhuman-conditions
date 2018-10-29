import { Component, OnInit, Input } from '@angular/core';
import { GameSetup } from '../card-definitions';

@Component({
  selector: 'app-setup-stage',
  templateUrl: './setup-stage.component.html',
  styleUrls: ['./setup-stage.component.css']
})
export class SetupStageComponent implements OnInit {

  error: string;

  @Input() title: string;
  @Input() setup: GameSetup;
  @Input() step: number;

  constructor() { }

  ngOnInit() {
  }

  validateStep(){
    if(this.step == 1){
      this.checkValue(this.setup.penalty, "penalty");
    }
    else if(this.step == 2){
      this.checkValue(this.setup.packet, "packet");
    }
    else if(this.step == 3){
      this.checkValue(this.setup.role, "suspect role");
    }
    else if(this.step == 4){
      this.checkValue(this.setup.note, "suspect note");
    }
    else if(this.step == 5){
      
    }
  }

  private checkValue(value: object, name: string){
    if(value){
      this.setup.step = this.step + 1;
    }
    else {
      this.error = "You must choose a " + name + " before proceding"
    }
  }

}
