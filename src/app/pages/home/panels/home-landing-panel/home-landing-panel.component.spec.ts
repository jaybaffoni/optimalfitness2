import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLandingPanelComponent } from './home-landing-panel.component';

describe('HomeLandingPanelComponent', () => {
  let component: HomeLandingPanelComponent;
  let fixture: ComponentFixture<HomeLandingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLandingPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLandingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
