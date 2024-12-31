import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tenis',
    loadChildren: () => import('./pages/tenis.module').then(m => m.TenisModule)
  },
  { path: '**',
    redirectTo: 'tenis'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
