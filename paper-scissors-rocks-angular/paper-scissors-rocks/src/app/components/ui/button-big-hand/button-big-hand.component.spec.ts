import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBigHandComponent } from './button-big-hand.component';

describe('ButtonBigHandComponent', () => {
  let component: ButtonBigHandComponent;
  let fixture: ComponentFixture<ButtonBigHandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonBigHandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonBigHandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
