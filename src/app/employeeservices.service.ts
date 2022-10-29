import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeservicesService {
  constructor(public ob: HttpClient) {}

  ApplyTraining(training: any): Observable<any> {
    return this.ob.post<any>(
      'https://localhost:7239/api/applyTraining',
      training
    );
  }

  GetAppliedTrainings(): Observable<any[]> {
    return this.ob.get<any[]>(
      'https://localhost:7239/api/displayTrainingbyid?id=' +
        JSON.parse(sessionStorage.getItem('empInfo') as string)[0]['id']
    );
  }
}
