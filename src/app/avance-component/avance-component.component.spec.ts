import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanceComponentComponent } from './avance-component.component';

describe('AvanceComponentComponent', () => {
  let component: AvanceComponentComponent;
  let fixture: ComponentFixture<AvanceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvanceComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvanceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
