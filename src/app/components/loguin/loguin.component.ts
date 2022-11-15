import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.css']
})

export class LoguinComponent implements OnInit {
  form: FormGroup;
  email = '';

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      password:['',[]],
      mail: ['',[]]
    })
  }


  ngOnInit(): void {
  }

}
