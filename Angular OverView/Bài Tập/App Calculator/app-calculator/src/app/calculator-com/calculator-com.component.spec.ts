import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComComponent } from './calculator-com.component';

describe('CalculatorComComponent', () => {
  let component: CalculatorComComponent;
  let fixture: ComponentFixture<CalculatorComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
