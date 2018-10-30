import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch-player-modal',
  templateUrl: './switch-player-modal.component.html',
  styleUrls: ['./switch-player-modal.component.css']
})
export class SwitchPlayerModalComponent implements OnInit {

  @Input() player: string;
  @Output() callback: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  continue(){
    this.callback.emit();
  }

}
