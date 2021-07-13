import { PointLivraisonVendeurComponent } from './point-livraison-vendeur/point-livraison-vendeur.component';
import { PointDeLivraisonComponent } from './point-de-livraison/point-de-livraison.component';
import { DomicileComponent } from './domicile/domicile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryfirstpageComponent } from './deliveryfirstpage/deliveryfirstpage.component';


const routes: Routes = [
  {path:"domicile", component: DomicileComponent},
  {path:"", component: DeliveryfirstpageComponent},
  {path:"LivraisonVendeur", component: PointLivraisonVendeurComponent},
  {path:"Livraison", component: PointDeLivraisonComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
