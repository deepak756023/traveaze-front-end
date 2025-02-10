import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoDetailsComponent } from './logo-details.component';

describe('LogoDetailsComponent', () => {
  let component: LogoDetailsComponent;
  let fixture: ComponentFixture<LogoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
