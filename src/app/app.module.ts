import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module.ts/app-routing.module";
import { TesteoEnrutamientoComponent } from './components/testeo-enrutamiento/testeo-enrutamiento.component';

import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LoguinComponent } from './components/loguin/loguin.component';

import { FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TesteoEnrutamientoComponent,
    LoguinComponent,
  ],
  imports: [ //Modulos que voy a importar
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } //metodos que quiero exportar para que sean de uso general
