import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffListPanelComponent } from './staff-list-panel.component';

describe('StaffListPanelComponent', () => {
  let component: StaffListPanelComponent;
  let fixture: ComponentFixture<StaffListPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffListPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffListPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
