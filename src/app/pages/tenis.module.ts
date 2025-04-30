import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {TenisRoutingModule} from './tenis-pages.routing';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CardComponent } from './components/card/card.component';
import { DetailsComponent } from './details/details.component';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';



@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ContactoComponent,
    CardComponent,
    DetailsComponent,
    CarritoComprasComponent
  ],
  imports: [
    CommonModule,
    TenisRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class TenisModule { }
