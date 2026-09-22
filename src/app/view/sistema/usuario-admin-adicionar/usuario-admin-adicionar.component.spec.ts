import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAdminAdicionarComponent } from './usuario-admin-adicionar.component';

describe('UsuarioAdminAdicionarComponent', () => {
  let component: UsuarioAdminAdicionarComponent;
  let fixture: ComponentFixture<UsuarioAdminAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioAdminAdicionarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioAdminAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
