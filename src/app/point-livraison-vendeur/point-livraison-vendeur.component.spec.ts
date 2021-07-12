import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointLivraisonVendeurComponent } from './point-livraison-vendeur.component';

describe('PointLivraisonVendeurComponent', () => {
  let component: PointLivraisonVendeurComponent;
  let fixture: ComponentFixture<PointLivraisonVendeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointLivraisonVendeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointLivraisonVendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
