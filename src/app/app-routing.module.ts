import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendasComponent } from './vendas/vendas.component';

const routes: Routes = [
  {
    path: '', 
    component: VendasComponent,
    
  },
  {
    path: '**', 
    component: VendasComponent,
    
  },
  {
    path: 'cupom', 
    component: VendasComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
