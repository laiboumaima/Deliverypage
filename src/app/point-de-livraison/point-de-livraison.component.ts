import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-point-de-livraison',
  templateUrl: './point-de-livraison.component.html',
  styleUrls: ['./point-de-livraison.component.scss']
})
export class PointDeLivraisonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //coordinates
  lat =36.7525 ;
  long = 3.04197;


  
}
