import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeakyGutComponent } from './leaky-gut.component';

describe('LeakyGutComponent', () => {
  let component: LeakyGutComponent;
  let fixture: ComponentFixture<LeakyGutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeakyGutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeakyGutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
