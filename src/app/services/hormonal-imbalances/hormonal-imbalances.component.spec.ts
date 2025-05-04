import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HormonalImbalancesComponent } from './hormonal-imbalances.component';

describe('HormonalImbalancesComponent', () => {
  let component: HormonalImbalancesComponent;
  let fixture: ComponentFixture<HormonalImbalancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HormonalImbalancesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HormonalImbalancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
