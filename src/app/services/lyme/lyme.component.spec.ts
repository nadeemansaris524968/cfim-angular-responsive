import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LymeComponent } from './lyme.component';

describe('LymeComponent', () => {
  let component: LymeComponent;
  let fixture: ComponentFixture<LymeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LymeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LymeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
