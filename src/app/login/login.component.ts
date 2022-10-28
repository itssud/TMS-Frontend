import { Component, OnInit } from '@angular/core';

declare interface ICredentials {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login(credentials: ICredentials) {
    // alert(JSON.stringify(credentials));
    window.location.href = '/home';
  }

  constructor() {}

  ngOnInit(): void {}
}
