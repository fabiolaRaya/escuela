import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesClaseComponent } from './acciones-clase.component';

describe('AccionesClaseComponent', () => {
  let component: AccionesClaseComponent;
  let fixture: ComponentFixture<AccionesClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccionesClaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionesClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
