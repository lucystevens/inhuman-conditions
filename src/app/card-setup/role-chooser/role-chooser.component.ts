import { Component, OnInit, Input } from '@angular/core';
import { CardService } from '../../card.service';
import { PacketService } from '../../packet.service';
import { GameSetup, SuspectRole, RoleType } from '../../card-definitions';
import { BaseChooser } from 'src/app/domain/base-chooser';

@Component({
  selector: 'app-role-chooser',
  templateUrl: './role-chooser.component.html',
  styleUrls: ['./role-chooser.component.css']
})
export class RoleChooserComponent extends BaseChooser implements OnInit {

  roles : SuspectRole[];
  error: string;

  constructor(private cards : CardService, private packetService: PacketService) {
    super();
  }

  ngOnInit() {
  }

  
  selectRole(role: SuspectRole){
    console.log("role selected");
    this.setup.role = role;
    this.error = "";
  }

  fetchRole() {
    this.setup.role = this.packetService.getSuspectRole(this.setup.packet);
    this.roles = [this.setup.role];
    this.error = "";
  }

  fetchRoles() {
    this.roles = this.packetService.getSuspectRoles(this.setup.packet);
    this.error = "";
  }

  getRoleType(role: SuspectRole): RoleType {
    return this.cards.getRoleType(role);
  } 

  validateStep(){
    if(this.setup.role){
      this.nextStep();
    }
    else{
      this.error = "You must select a suspect role before proceding."
    }
  }

}
