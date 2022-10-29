import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAppliedComponent } from './manager-applied.component';

describe('ManagerAppliedComponent', () => {
  let component: ManagerAppliedComponent;
  let fixture: ComponentFixture<ManagerAppliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerAppliedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
