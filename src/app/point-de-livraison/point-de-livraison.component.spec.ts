import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointDeLivraisonComponent } from './point-de-livraison.component';

describe('PointDeLivraisonComponent', () => {
  let component: PointDeLivraisonComponent;
  let fixture: ComponentFixture<PointDeLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointDeLivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointDeLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
