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
  details: IEmployeeDetails = {
    ID: 2313,
    Name: 'Keerti Raju',
    Designation: '.Net Guru',
    ManagerID: 23344,
    Email: 'rajugaru@yti.com',
    Password: 'aydgasghasjkdfjk',
  };

  constructor() {}

  ngOnInit(): void {}
}
