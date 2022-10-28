import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DbservicesService {
  constructor(public ob: HttpClient) {}

  AddEmployee(emp: any): Observable<number> {
    return this.ob.post<number>(
      'https://localhost:7239/api/insertEmployee',
      emp
    );
  }
}
