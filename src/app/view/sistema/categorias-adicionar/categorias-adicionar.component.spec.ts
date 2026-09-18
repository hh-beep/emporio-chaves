import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasAdicionarComponent } from './categorias-adicionar.component';

describe('CategoriasAdicionarComponent', () => {
  let component: CategoriasAdicionarComponent;
  let fixture: ComponentFixture<CategoriasAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriasAdicionarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriasAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
