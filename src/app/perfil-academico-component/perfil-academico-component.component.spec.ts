import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAcademicoComponentComponent } from './perfil-academico-component.component';

describe('PerfilAcademicoComponentComponent', () => {
  let component: PerfilAcademicoComponentComponent;
  let fixture: ComponentFixture<PerfilAcademicoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilAcademicoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilAcademicoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
