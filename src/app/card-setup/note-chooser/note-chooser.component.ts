import { Component, OnInit, Input } from '@angular/core';
import { GameSetup, SuspectNote } from '../../card-definitions';
import { CardService } from '../../card.service';
import { BaseChooser } from 'src/app/domain/base-chooser';

@Component({
  selector: 'app-note-chooser',
  templateUrl: './note-chooser.component.html',
  styleUrls: ['./note-chooser.component.css']
})
export class NoteChooserComponent extends BaseChooser implements OnInit {

  notes : SuspectNote[];
  error: string;

  constructor(private cards : CardService) {
    super();
  }

  ngOnInit() {
    this.notes = this.cards.getSuspectNotes();
  }

  selectNote(note: SuspectNote){
    this.setup.note = note;
    this.error = "";
  }

  validateStep(){
    if(this.setup.note){
      this.nextStep();
    }
    else{
      this.error = "You must select a suspect note before proceding."
    }
  }

}
