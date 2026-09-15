import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensAdicionarComponent } from './itens-adicionar.component';

describe('ItensAdicionarComponent', () => {
  let component: ItensAdicionarComponent;
  let fixture: ComponentFixture<ItensAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItensAdicionarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
