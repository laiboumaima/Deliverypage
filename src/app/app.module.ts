import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DomicileComponent } from './domicile/domicile.component';
import { PointDeLivraisonComponent } from './point-de-livraison/point-de-livraison.component';
import { PointLivraisonVendeurComponent } from './point-livraison-vendeur/point-livraison-vendeur.component';
import { DeliveryfirstpageComponent } from './deliveryfirstpage/deliveryfirstpage.component';

import { AgmCoreModule } from '@agm/core'; 
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    DomicileComponent,
    PointDeLivraisonComponent,
    PointLivraisonVendeurComponent,
    DeliveryfirstpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDxNZOxQbEl4VQmcYETchKoHAcXCC-AlpE'
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
