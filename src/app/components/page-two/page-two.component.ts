import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-two', //nombre del componente, para rutear despues
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {

  numero1 = 0;
  numero2 = 0;

  constructor() { }

  ngOnInit(): void {
  }

  suma():number{
    return this.numero1 + this.numero2;
  }

}
