import { Component, OnInit } from '@angular/core';
import { HrdbservicesService } from '../hrdbservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HrdbservicesService],
})
export class HomeComponent implements OnInit {
  employees: any;
  session_userType = sessionStorage.getItem('userType');
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
