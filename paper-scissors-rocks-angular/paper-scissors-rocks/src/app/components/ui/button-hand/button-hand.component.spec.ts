import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonHandComponent } from './button-hand.component';

describe('ButtonHandComponent', () => {
  let component: ButtonHandComponent;
  let fixture: ComponentFixture<ButtonHandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonHandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonHandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
