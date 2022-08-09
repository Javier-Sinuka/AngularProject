import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

//Importamos nuestros componentes
import { PageOneComponent } from "../components/page-one/page-one.component";
import { PageTwoComponent } from "../components/page-two/page-two.component";
import { PageAboutComponent } from "../components/page-about/page-about.component";
import {AppComponent} from "../app.component";
import { Pagina404ComponentComponent} from "../components/pagina404-component/pagina404-component.component";
import {FormsModule} from "@angular/forms";

//Definimos nuestras rutas
const routes: Routes = [ //Array de las rutas
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: 'home', component:PageOneComponent},
  {path: 'otra-pagina', component:PageTwoComponent},
  {path: 'sobre-nosotros', component:PageAboutComponent},
  {path: '**', component:Pagina404ComponentComponent},
]


@NgModule({
  declarations: [
    PageOneComponent,
    PageTwoComponent,
    PageAboutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    //Con esto le decimos donde estan las rutas, en ROUTES
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule{ }
