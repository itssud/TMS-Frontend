import { Component, OnInit } from '@angular/core';
import { DbservicesService } from '../dbservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DbservicesService],
})
export class HomeComponent implements OnInit {
  constructor(public ob: DbservicesService) {}

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
