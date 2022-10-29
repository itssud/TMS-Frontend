import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAppliedComponent } from './emp-applied.component';

describe('EmpAppliedComponent', () => {
  let component: EmpAppliedComponent;
  let fixture: ComponentFixture<EmpAppliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpAppliedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
