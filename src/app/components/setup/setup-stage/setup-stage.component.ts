import { Component, OnInit, Input } from '@angular/core';
import { GameSetup } from 'src/app/card-definitions';

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

}
