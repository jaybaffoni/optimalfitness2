import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsLandingPanelComponent } from './locations-landing-panel.component';

describe('LocationsLandingPanelComponent', () => {
  let component: LocationsLandingPanelComponent;
  let fixture: ComponentFixture<LocationsLandingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsLandingPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsLandingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
