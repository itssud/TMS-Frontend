import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginservicesService {
  constructor(public ob: HttpClient) {}

  ValidateCredentials(cred: any): Observable<any> {
    return this.ob.post<any>('https://localhost:7239/api/Login', cred, {
      responseType: 'text' as 'json',
    });
  }
}
