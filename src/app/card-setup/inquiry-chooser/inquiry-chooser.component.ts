import { Component, OnInit, Input } from '@angular/core';
import { InvestigatorInquiry, GameSetup } from '../../card-definitions';
import { BaseChooser } from 'src/app/domain/base-chooser';

@Component({
  selector: 'app-inquiry-chooser',
  templateUrl: './inquiry-chooser.component.html',
  styleUrls: ['./inquiry-chooser.component.css']
})
export class InquiryChooserComponent extends BaseChooser implements OnInit {

  @Input() type: string;

  inquiries: InvestigatorInquiry[];
  inquiry1: InvestigatorInquiry;
  inquiry2: InvestigatorInquiry;

  error: string;

  constructor() {
    super();
  }

  ngOnInit() {
    if(this.type === "primary"){
      this.inquiries = this.setup.packet.primaryInquiries;
    }
    else{
      this.inquiries = this.setup.packet.secondaryInquiries;
    }
  }


  selectInquiry(inquiry: InvestigatorInquiry) {
    // If none selected then select in first slot
    if(!this.inquiry1) {
      this.inquiry1 = inquiry;
    }
    // If one selected then select in second slot
    else if(!this.inquiry2) {
      this.inquiry2 = inquiry;
    }
    // If both selected then deselect first slot, move
    // second up and select in second slot
    else {
      this.inquiry1 = this.inquiry2;
      this.inquiry2 = inquiry;
    }
  }

  isSelected(inquiry: InvestigatorInquiry): boolean {
    return inquiry === this.inquiry1 || inquiry === this.inquiry2;
  }

  validateStep(){
    if(this.inquiry1 && this.inquiry2 && this.inquiry1 !== this.inquiry2){
      this.completeStep();
    }
    else {
      this.error = "You must select two " + this.type + " inquiries before proceding."
    }
  }

  private completeStep(){
    if(this.type === "primary"){
      this.setup.primaryInquiry1 = this.inquiry1;
      this.setup.primaryInquiry2 = this.inquiry2;
    }
    else{
      this.setup.secondaryInquiry1 = this.inquiry1;
      this.setup.secondaryInquiry2 = this.inquiry2;
    }
    this.nextStep();
  }

}
