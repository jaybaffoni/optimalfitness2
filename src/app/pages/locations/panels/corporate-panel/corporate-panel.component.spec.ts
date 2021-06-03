import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatePanelComponent } from './corporate-panel.component';

describe('CorporatePanelComponent', () => {
  let component: CorporatePanelComponent;
  let fixture: ComponentFixture<CorporatePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporatePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
