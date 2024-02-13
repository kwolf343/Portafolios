import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiasComponentComponent } from './tecnologias-component.component';

describe('TecnologiasComponentComponent', () => {
  let component: TecnologiasComponentComponent;
  let fixture: ComponentFixture<TecnologiasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiasComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
