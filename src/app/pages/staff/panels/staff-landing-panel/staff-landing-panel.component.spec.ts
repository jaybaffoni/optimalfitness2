import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLandingPanelComponent } from './staff-landing-panel.component';

describe('StaffLandingPanelComponent', () => {
  let component: StaffLandingPanelComponent;
  let fixture: ComponentFixture<StaffLandingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffLandingPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffLandingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
