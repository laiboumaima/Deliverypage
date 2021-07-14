import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-point-livraison-vendeur',
  templateUrl: './point-livraison-vendeur.component.html',
  styleUrls: ['./point-livraison-vendeur.component.scss']
})
export class PointLivraisonVendeurComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //coordinates
  lat =36.7525 ;
  long = 3.04197;

}
