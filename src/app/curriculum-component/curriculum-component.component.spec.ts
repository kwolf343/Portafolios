import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumComponentComponent } from './curriculum-component.component';

describe('CurriculumComponentComponent', () => {
  let component: CurriculumComponentComponent;
  let fixture: ComponentFixture<CurriculumComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculumComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
