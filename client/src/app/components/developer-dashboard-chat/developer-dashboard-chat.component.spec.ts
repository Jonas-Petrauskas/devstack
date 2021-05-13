import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperDashboardChatComponent } from './developer-dashboard-chat.component';

describe('DeveloperDashboardChatComponent', () => {
  let component: DeveloperDashboardChatComponent;
  let fixture: ComponentFixture<DeveloperDashboardChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperDashboardChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperDashboardChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
