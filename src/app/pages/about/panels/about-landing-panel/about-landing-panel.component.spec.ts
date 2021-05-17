import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLandingPanelComponent } from './about-landing-panel.component';

describe('AboutLandingPanelComponent', () => {
  let component: AboutLandingPanelComponent;
  let fixture: ComponentFixture<AboutLandingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutLandingPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLandingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
