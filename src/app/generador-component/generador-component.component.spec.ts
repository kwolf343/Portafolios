import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradorComponentComponent } from './generador-component.component';

describe('GeneradorComponentComponent', () => {
  let component: GeneradorComponentComponent;
  let fixture: ComponentFixture<GeneradorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneradorComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneradorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
