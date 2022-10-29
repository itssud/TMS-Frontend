import { Component, OnInit } from '@angular/core';
import { ManagerservicesService } from '../managerservices.service';

@Component({
  selector: 'app-manager-employee',
  templateUrl: './manager-employee.component.html',
  styleUrls: ['./manager-employee.component.scss'],
  providers: [ManagerservicesService],
})
export class ManagerEmployeeComponent implements OnInit {
  employees: any;
  constructor(public ob: ManagerservicesService) {
    ob.GetAllEmployeeAppliedTrainingOfManager().subscribe(
      (res) => (this.employees = res)
    );
  }

  ngOnInit(): void {}
}
