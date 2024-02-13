import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaComponentComponent } from './experiencia-component.component';

describe('ExperienciaComponentComponent', () => {
  let component: ExperienciaComponentComponent;
  let fixture: ComponentFixture<ExperienciaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
