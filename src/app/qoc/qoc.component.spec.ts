import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QocComponent } from './qoc.component';

describe('QocComponent', () => {
  let component: QocComponent;
  let fixture: ComponentFixture<QocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
