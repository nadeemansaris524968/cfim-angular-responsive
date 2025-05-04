import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CholestrolComponent } from './cholestrol.component';

describe('CholestrolComponent', () => {
  let component: CholestrolComponent;
  let fixture: ComponentFixture<CholestrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CholestrolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CholestrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
