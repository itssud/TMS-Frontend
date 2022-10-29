import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManagerservicesService {
  constructor(public ob: HttpClient) {}

  GetAllEmployeeAppliedTrainingOfManager(): Observable<any[]> {
    return this.ob.get<any[]>(
      'https://localhost:7239/api/displaybymanager?id=' +
        JSON.parse(sessionStorage.getItem('empInfo') as string)[0]['id']
    );
  }
}
