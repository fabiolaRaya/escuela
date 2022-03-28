import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaClaseComponent } from './edita-clase.component';

describe('EditaClaseComponent', () => {
  let component: EditaClaseComponent;
  let fixture: ComponentFixture<EditaClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaClaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
