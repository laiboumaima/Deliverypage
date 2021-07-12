import { DomicileComponent } from './domicile/domicile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryfirstpageComponent } from './deliveryfirstpage/deliveryfirstpage.component';


const routes: Routes = [
  {path:"domicile", component: DomicileComponent},
  {path:"", component: DeliveryfirstpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
