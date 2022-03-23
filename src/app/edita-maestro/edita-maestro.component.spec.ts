import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaMaestroComponent } from './edita-maestro.component';

describe('EditaMaestroComponent', () => {
  let component: EditaMaestroComponent;
  let fixture: ComponentFixture<EditaMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaMaestroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
