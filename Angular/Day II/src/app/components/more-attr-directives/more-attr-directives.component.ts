import { Component } from '@angular/core';

@Component({
  selector: 'app-more-attr-directives',
  templateUrl: './more-attr-directives.component.html',
  styleUrls: ['./more-attr-directives.component.css']
})
export class MoreAttrDirectivesComponent {
  flag: boolean;
  name: string;
  myStyles: any;
  constructor() {
    this.flag = true;
    this.name = 'Rahul';
    this.myStyles = {
      'background-color': 'green',
      'font-size': '20px',
      'color': 'yellow'
    }
  }
}
