import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlaceComponent } from './add-place.component';

describe('AddPlaceComponent', () => {
  let component: AddPlaceComponent;
  let fixture: ComponentFixture<AddPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPlaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
