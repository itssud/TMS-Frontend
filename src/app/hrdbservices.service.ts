import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HrdbservicesService {
  constructor(public ob: HttpClient) {}

  AddEmployee(emp: any): Observable<number> {
    return this.ob.post<number>(
      'https://localhost:7239/api/insertEmployee',
      emp
    );
  }

  GetAllEmployee(): Observable<any[]> {
    return this.ob.get<any[]>('https://localhost:7239/api/displayAllEmployees');
  }
  GetAllTraining(): Observable<any[]> {
    return this.ob.get<any[]>('https://localhost:7239/api/displayTraining');
  }

  AddTraining(training: any): Observable<number> {
    return this.ob.post<number>(
      'https://localhost:7239/api/insertTraining',
      training
    );
  }
}
