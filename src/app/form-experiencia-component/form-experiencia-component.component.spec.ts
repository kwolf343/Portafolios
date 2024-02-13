import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExperienciaComponentComponent } from './form-experiencia-component.component';

describe('FormExperienciaComponentComponent', () => {
  let component: FormExperienciaComponentComponent;
  let fixture: ComponentFixture<FormExperienciaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormExperienciaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormExperienciaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
