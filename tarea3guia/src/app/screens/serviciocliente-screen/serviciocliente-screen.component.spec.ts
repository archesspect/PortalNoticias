import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioclienteScreenComponent } from './serviciocliente-screen.component';

describe('ServicioclienteScreenComponent', () => {
  let component: ServicioclienteScreenComponent;
  let fixture: ComponentFixture<ServicioclienteScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioclienteScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioclienteScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
