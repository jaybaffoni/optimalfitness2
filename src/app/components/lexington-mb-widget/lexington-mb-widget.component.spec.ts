import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LexingtonMbWidgetComponent } from './lexington-mb-widget.component';

describe('LexingtonMbWidgetComponent', () => {
  let component: LexingtonMbWidgetComponent;
  let fixture: ComponentFixture<LexingtonMbWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LexingtonMbWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LexingtonMbWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
