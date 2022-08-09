import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css'],
  animations:[
    trigger('aniBoton',[
      state('inactive',style({
        backgroundColor: '#eee',
        transform: 'scale(1)',
      })),
      state('active',style({
        backgroundColor: '#ff0000',
        transform: 'scale(1.5)',
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('inactive => active', animate('100ms ease-out'))
    ])
  ]
})
export class PageOneComponent implements OnInit {
  public state:string = "inactive";
  numero = 0;
  constructor() { }

  ngOnInit(): void {
  }

  togleBoton(){
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

  imgUrlLocal = '../assets/img/Kazuto.jpg'

  incrementar(){
    this.numero +=1;
  }

  decrementar(){
    this.numero -=1;
  }
}
