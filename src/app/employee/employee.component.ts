import { Component, OnInit } from '@angular/core';

export declare interface IEmployeeDetails {
  ID: number;
  Name: string;
  Designation: string;
  ManagerID: number;
  Email: string;
  Password: string;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  page: string = 'Training';

  pageChanger(pageName: string) {
    this.page = pageName;
  }

  constructor() {}

  ngOnInit(): void {}
}
