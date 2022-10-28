import { Component, OnInit } from '@angular/core';
import { IEmployeeDetails } from '../employee/employee.component';

declare interface IManager {
  ID: number;
  Name: string;
  Department: string;
  Email: string;
  Password: string;
}

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.scss'],
})
export class HrComponent implements OnInit {
  employees: IEmployeeDetails[] = [
    {
      ID: 2313,
      Name: 'Keerti Raju',
      Designation: '.Net Guru',
      ManagerID: 23344,
      Email: 'rajugaru@yti.com',
      Password: 'aydgasghasjkdfjk',
    },
  ];

  managers: IManager[] = [
    {
      ID: 2313,
      Name: 'Keerti Raju',
      Department: '.Net Guru',
      Email: 'rajugaru@yti.com',
      Password: 'aydgasghasjkdfjk',
    },
  ];

  addNewEmployee(employee: IEmployeeDetails) {
    this.employees.push(employee);
  }

  deleteEmployee(employee: IEmployeeDetails) {
    this.employees.filter((emp: IEmployeeDetails): any => {
      if (emp.ID !== employee.ID) {
        return employee;
      }
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
