import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryfirstpageComponent } from './deliveryfirstpage.component';

describe('DeliveryfirstpageComponent', () => {
  let component: DeliveryfirstpageComponent;
  let fixture: ComponentFixture<DeliveryfirstpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryfirstpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryfirstpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
