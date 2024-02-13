import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesComponentComponent } from './habilidades-component.component';

describe('HabilidadesComponentComponent', () => {
  let component: HabilidadesComponentComponent;
  let fixture: ComponentFixture<HabilidadesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
