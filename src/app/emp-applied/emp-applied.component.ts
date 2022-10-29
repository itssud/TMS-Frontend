import { Component, OnInit } from '@angular/core';
import { EmployeeservicesService } from '../employeeservices.service';

@Component({
  selector: 'app-emp-applied',
  templateUrl: './emp-applied.component.html',
  styleUrls: ['./emp-applied.component.scss'],
  providers: [EmployeeservicesService],
})
export class EmpAppliedComponent implements OnInit {
  trainings: any;
  constructor(public ob: EmployeeservicesService) {
    ob.GetAppliedTrainings().subscribe((res) => (this.trainings = res));
  }

  ngOnInit(): void {}
}
