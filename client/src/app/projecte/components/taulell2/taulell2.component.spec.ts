import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taulell2Component } from './taulell2.component';

describe('Taulell2Component', () => {
  let component: Taulell2Component;
  let fixture: ComponentFixture<Taulell2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Taulell2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Taulell2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
