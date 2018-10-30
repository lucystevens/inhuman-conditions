import { Component, OnInit, Input } from '@angular/core';
import { GameSetup, SuspectNote } from '../../card-definitions';
import { CardService } from '../../card.service';

@Component({
  selector: 'app-note-chooser',
  templateUrl: './note-chooser.component.html',
  styleUrls: ['./note-chooser.component.css']
})
export class NoteChooserComponent implements OnInit {

  @Input() setup: GameSetup;

  notes : SuspectNote[];
  error: string;

  constructor(private cards : CardService) { }

  ngOnInit() {
    this.notes = this.cards.getSuspectNotes();
  }

  selectNote(note: SuspectNote){
    this.setup.note = note;
    this.error = "";
  }

  validateStep(){
    if(this.setup.note){
      this.setup.step = 5;
    }
    else{
      this.error = "You must select a suspect note before proceding."
    }
  }

}
