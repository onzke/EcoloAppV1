import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGestureEcoComponent } from './single-gesture-eco.component';

describe('SingleGestureEcoComponent', () => {
  let component: SingleGestureEcoComponent;
  let fixture: ComponentFixture<SingleGestureEcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleGestureEcoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleGestureEcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
