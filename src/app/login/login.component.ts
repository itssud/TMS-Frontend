import { Component, OnInit } from '@angular/core';
import { LoginservicesService } from '../loginservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginservicesService],
})
export class LoginComponent implements OnInit {
  constructor(public ob: LoginservicesService) {}

  ngOnInit(): void {}
  login(credentials: any) {
    // alert(JSON.stringify(credentials));
    this.ob.ValidateCredentials(credentials).subscribe(
      (res: any) => {
        console.log('Success', res);
        sessionStorage.setItem('email', credentials.Email);
        sessionStorage.setItem('userType', res);
        window.location.href = '/home';
      },
      (err: any) => {
        console.log('Error', err);
      }
    );
  }
}
