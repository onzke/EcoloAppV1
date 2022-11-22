import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGestureEcoComponent } from './new-gesture-eco.component';

describe('NewGestureEcoComponent', () => {
  let component: NewGestureEcoComponent;
  let fixture: ComponentFixture<NewGestureEcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGestureEcoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewGestureEcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
