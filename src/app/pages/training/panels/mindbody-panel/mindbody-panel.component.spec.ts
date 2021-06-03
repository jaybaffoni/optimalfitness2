import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindbodyPanelComponent } from './mindbody-panel.component';

describe('MindbodyPanelComponent', () => {
  let component: MindbodyPanelComponent;
  let fixture: ComponentFixture<MindbodyPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MindbodyPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MindbodyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
