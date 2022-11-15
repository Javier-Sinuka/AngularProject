import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = ''; // la url que corresponda en cada caso
  token: string = '';

  constructor(){}
}
