import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-setup-stage',
  templateUrl: './setup-stage.component.html',
  styleUrls: ['./setup-stage.component.css']
})
export class SetupStageComponent implements OnInit {

  @Input() title: string;
  @Input() state: string;

  constructor() { }

  ngOnInit() {
  }

}
