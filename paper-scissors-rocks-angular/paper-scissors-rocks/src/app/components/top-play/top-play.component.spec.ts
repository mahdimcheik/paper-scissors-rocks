import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPlayComponent } from './top-play.component';

describe('TopPlayComponent', () => {
  let component: TopPlayComponent;
  let fixture: ComponentFixture<TopPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopPlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
