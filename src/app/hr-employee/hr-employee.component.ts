import { Component, OnInit } from '@angular/core';
import { HrdbservicesService } from '../hrdbservices.service';

@Component({
  selector: 'app-hr-employee',
  templateUrl: './hr-employee.component.html',
  styleUrls: ['./hr-employee.component.scss'],
  providers: [HrdbservicesService],
})
export class HrEmployeeComponent implements OnInit {
  employees: any;
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
