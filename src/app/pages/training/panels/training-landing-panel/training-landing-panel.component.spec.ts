import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingLandingPanelComponent } from './training-landing-panel.component';

describe('TrainingLandingPanelComponent', () => {
  let component: TrainingLandingPanelComponent;
  let fixture: ComponentFixture<TrainingLandingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingLandingPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingLandingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
