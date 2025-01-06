import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {TenisRoutingModule} from './tenis-pages.routing';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TiendaComponent } from './tienda/tienda.component';
import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CardComponent } from './components/card/card.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    NavbarComponent,
    TiendaComponent,
    AboutComponent,
    ContactoComponent,
    CardComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    TenisRoutingModule,
    MaterialModule

  ]
})
export class TenisModule { }
