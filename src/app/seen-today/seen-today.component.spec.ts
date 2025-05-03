import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeenTodayComponent } from './seen-today.component';

describe('SeenTodayComponent', () => {
  let component: SeenTodayComponent;
  let fixture: ComponentFixture<SeenTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeenTodayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeenTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
