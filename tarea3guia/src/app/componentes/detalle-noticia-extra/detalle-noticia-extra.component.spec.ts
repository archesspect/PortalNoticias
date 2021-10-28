import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleNoticiaExtraComponent } from './detalle-noticia-extra.component';

describe('DetalleNoticiaExtraComponent', () => {
  let component: DetalleNoticiaExtraComponent;
  let fixture: ComponentFixture<DetalleNoticiaExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleNoticiaExtraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleNoticiaExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
