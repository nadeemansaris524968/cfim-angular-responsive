import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HypertensionComponent } from './hypertension.component';

describe('HypertensionComponent', () => {
  let component: HypertensionComponent;
  let fixture: ComponentFixture<HypertensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HypertensionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HypertensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
