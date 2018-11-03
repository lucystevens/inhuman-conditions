import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-element',
  templateUrl: './card-element.component.html',
  styleUrls: ['./card-element.component.css']
})
export class CardElementComponent implements OnInit {

  @Input() active: boolean;
  @Input() dark: boolean = true;
  @Input() selectable: boolean = true;
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getClasses(): string[]{
    const classes = [];
    if(this.active){
      classes.push("active");
    }

    if(this.dark){
      classes.push("bg-dark");
      classes.push("text-white");
    }

    if(this.selectable){
      classes.push("selectable");
    }

    return classes;
  }

  select(){
    this.onClick.emit();
  }

}
