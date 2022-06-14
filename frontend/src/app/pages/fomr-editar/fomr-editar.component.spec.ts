import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomrEditarComponent } from './fomr-editar.component';

describe('FomrEditarComponent', () => {
  let component: FomrEditarComponent;
  let fixture: ComponentFixture<FomrEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FomrEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FomrEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
