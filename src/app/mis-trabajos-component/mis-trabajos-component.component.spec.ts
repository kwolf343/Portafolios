import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisTrabajosComponentComponent } from './mis-trabajos-component.component';

describe('MisTrabajosComponentComponent', () => {
  let component: MisTrabajosComponentComponent;
  let fixture: ComponentFixture<MisTrabajosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisTrabajosComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisTrabajosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
