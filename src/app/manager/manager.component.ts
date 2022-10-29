import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
})
export class ManagerComponent implements OnInit {
  page: string = 'Employee';

  pageChanger(pageName: string) {
    this.page = pageName;
  }
  constructor() {}

  ngOnInit(): void {}
}
