import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestureEcoComponent } from './gesture-eco.component';

describe('GestureEcoComponent', () => {
  let component: GestureEcoComponent;
  let fixture: ComponentFixture<GestureEcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestureEcoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestureEcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
