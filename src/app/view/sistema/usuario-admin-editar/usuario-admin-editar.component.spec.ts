import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAdminEditarComponent } from './usuario-admin-editar.component';

describe('UsuarioAdminEditarComponent', () => {
  let component: UsuarioAdminEditarComponent;
  let fixture: ComponentFixture<UsuarioAdminEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioAdminEditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioAdminEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
