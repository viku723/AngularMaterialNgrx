import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonControlsComponent } from './button-controls.component';

describe('ButtonControlsComponent', () => {
  let component: ButtonControlsComponent;
  let fixture: ComponentFixture<ButtonControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
