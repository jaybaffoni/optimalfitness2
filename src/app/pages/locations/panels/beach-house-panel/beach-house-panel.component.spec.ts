import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachHousePanelComponent } from './beach-house-panel.component';

describe('BeachHousePanelComponent', () => {
  let component: BeachHousePanelComponent;
  let fixture: ComponentFixture<BeachHousePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeachHousePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachHousePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
