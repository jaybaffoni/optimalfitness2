import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuinPanelComponent } from './quin-panel.component';

describe('QuinPanelComponent', () => {
  let component: QuinPanelComponent;
  let fixture: ComponentFixture<QuinPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuinPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuinPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
