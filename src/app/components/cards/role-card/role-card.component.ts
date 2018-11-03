import { Component, OnInit, Input } from '@angular/core';
import { SuspectRole, RoleType } from 'src/app/card-definitions';
import { CardService } from 'src/app/card.service';

@Component({
  selector: 'app-role-card',
  templateUrl: './role-card.component.html',
  styleUrls: ['./role-card.component.css']
})
export class RoleCardComponent implements OnInit {

  @Input() role: SuspectRole;
  type: RoleType;

  constructor(private cards: CardService) { }

  ngOnInit() {
    this.type = this.cards.getRoleType(this.role);
  }

  getCardClass(): string{
    if(this.type.id == 1){
      return "human";
    }
    else return "robot";
  }
}
