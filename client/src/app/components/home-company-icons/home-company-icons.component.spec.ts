import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompanyIconsComponent } from './home-company-icons.component';

describe('HomeCompanyIconsComponent', () => {
  let component: HomeCompanyIconsComponent;
  let fixture: ComponentFixture<HomeCompanyIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCompanyIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCompanyIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
