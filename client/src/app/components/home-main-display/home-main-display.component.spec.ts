import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainDisplayComponent } from './home-main-display.component';

describe('HomeMainDisplayComponent', () => {
  let component: HomeMainDisplayComponent;
  let fixture: ComponentFixture<HomeMainDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMainDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
