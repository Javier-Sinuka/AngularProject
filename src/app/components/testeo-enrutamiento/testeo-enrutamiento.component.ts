import { Component, OnInit } from '@angular/core';
//Importo esta libreria para poder recibir la URL
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-testeo-enrutamiento',
  templateUrl: './testeo-enrutamiento.component.html',
  styleUrls: ['./testeo-enrutamiento.component.css']
})
export class TesteoEnrutamientoComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params:Params) => {
      const nombre = params.toString();
    });
  }

}
