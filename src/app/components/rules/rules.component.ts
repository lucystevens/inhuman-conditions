import { Component, OnInit } from '@angular/core';
import { RULES, RulesSection } from './rules';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getSections(): RulesSection[] {
    return RULES;
  }

  getHeadings(): string[]{
    const headings = [];
    for(const section of RULES){
      headings.push(section.title);
    }
    return headings;
  }

  getSectionId(heading: string): string{
    const regex = new RegExp("[\\W_]+", "g");
    let id = heading.replace(regex, "-");
    return id.toLocaleLowerCase();
  }

  getContentType(content: string): string{
    if(content.startsWith("[LIST]:")){
      return "LIST";
    }
    else if(content.includes("[LINK]:")){
      return "LINK";
    }
    if(content.startsWith("[SUBTITLE]:")){
      return "SUBTITLE";
    }
    else if(content.startsWith("[HUMAN ROLE]")){
      return "HUMAN ROLE";
    }
    else if(content.startsWith("[ROBOT ROLES]")){
      return "ROBOT ROLES";
    }
    else if(content.startsWith("[INQUIRY CARDS]")){
      return "INQUIRY CARDS";
    }
    else return "TEXT";
  }

  getListElements(content: string): string[]{
    const elements = content.replace("[LIST]:", "").split(" - ");
    return this.removeEmptyStrings(elements);
  }

  getLinkElements(content: string): string[]{
    var linkStartIndex = content.indexOf("[LINK]:(");
    var linkSplitIndex = content.indexOf("|", linkStartIndex);
    var linkEndIndex = content.indexOf(")", linkSplitIndex);
    return [
      content.substring(0, linkStartIndex),
      content.substring(linkStartIndex + 8, linkSplitIndex),
      content.substring(linkSplitIndex + 1, linkEndIndex),
      content.substring(linkEndIndex + 1)
    ];
  }

  getSubtitle(content: string): string{
    return content.replace("[SUBTITLE]:", "");
  }

  private removeEmptyStrings(array: string[]){
    const result = [];
    for(const val of array){
      if(val.length > 0){
        result.push(val);
      }
    }
    return result;
  }

  smoothScroll(heading: string): boolean{
    if(!heading.startsWith("#")){
      heading = "#" + this.getSectionId(heading);
    }
    console.log(heading);
    const element = document.querySelector(heading);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return false;
}

}
