import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestureEcoListComponent } from './gesture-eco-list.component';

describe('GestureEcoListComponent', () => {
  let component: GestureEcoListComponent;
  let fixture: ComponentFixture<GestureEcoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestureEcoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestureEcoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
