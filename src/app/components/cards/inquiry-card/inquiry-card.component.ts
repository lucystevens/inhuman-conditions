import { Component, OnInit, Input } from '@angular/core';
import { InvestigatorInquiry } from 'src/app/card-definitions';

@Component({
  selector: 'app-inquiry-card',
  templateUrl: './inquiry-card.component.html',
  styleUrls: ['./inquiry-card.component.css']
})
export class InquiryCardComponent implements OnInit {

  @Input() inquiry: InvestigatorInquiry;

  constructor() { }

  ngOnInit() {
  }

}
