import { Component, OnInit } from '@angular/core';
import { IEmployeeDetails } from '../employee/employee.component';
import { HrdbservicesService } from '../hrdbservices.service';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.scss'],
  providers: [HrdbservicesService],
})
export class HrComponent implements OnInit {
  employees: any;

  page: string = 'Employee';

  pageChanger(pageName: string) {
    this.page = pageName;
  }
  constructor(public ob: HrdbservicesService) {
    ob.GetAllEmployee().subscribe((res) => (this.employees = res));
  }

  result: any;
  ngOnInit(): void {}

  addEmployee(frm: any) {
    this.ob
      .AddEmployee(frm)
      .subscribe(
        (res) =>
          (this.result =
            res > 0
              ? 'New Employee Created Successfully'
              : 'Error Occured Please Try Again')
      );
  }
}
