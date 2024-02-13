import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoComponentComponent } from './trabajo-component.component';

describe('TrabajoComponentComponent', () => {
  let component: TrabajoComponentComponent;
  let fixture: ComponentFixture<TrabajoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
