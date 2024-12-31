import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MainComponent} from './main/main.component';
import {TiendaComponent} from './tienda/tienda.component';
import {AboutComponent} from './about/about.component';
import {ContactoComponent} from './contacto/contacto.component';

export const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children:[
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'tienda',
        component: TiendaComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contacto',
        component: ContactoComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ],
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenisRoutingModule {}
