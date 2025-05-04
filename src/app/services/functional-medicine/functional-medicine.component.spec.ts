import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalMedicineComponent } from './functional-medicine.component';

describe('FunctionalMedicineComponent', () => {
  let component: FunctionalMedicineComponent;
  let fixture: ComponentFixture<FunctionalMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FunctionalMedicineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionalMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
