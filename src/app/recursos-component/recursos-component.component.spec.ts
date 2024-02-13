import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosComponentComponent } from './recursos-component.component';

describe('RecursosComponentComponent', () => {
  let component: RecursosComponentComponent;
  let fixture: ComponentFixture<RecursosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursosComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecursosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
