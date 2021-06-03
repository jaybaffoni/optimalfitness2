import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LexingtonPanelComponent } from './lexington-panel.component';

describe('LexingtonPanelComponent', () => {
  let component: LexingtonPanelComponent;
  let fixture: ComponentFixture<LexingtonPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LexingtonPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LexingtonPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
