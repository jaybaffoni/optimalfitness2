import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InHomePanelComponent } from './in-home-panel.component';

describe('InHomePanelComponent', () => {
  let component: InHomePanelComponent;
  let fixture: ComponentFixture<InHomePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InHomePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InHomePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
