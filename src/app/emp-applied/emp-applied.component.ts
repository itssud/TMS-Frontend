import { Component, OnInit } from '@angular/core';
import { EmployeeservicesService } from '../employeeservices.service';
import { HrdbservicesService } from '../hrdbservices.service';

@Component({
  selector: 'app-emp-applied',
  templateUrl: './emp-applied.component.html',
  styleUrls: ['./emp-applied.component.scss'],
  providers: [EmployeeservicesService, HrdbservicesService],
})
export class EmpAppliedComponent implements OnInit {
  trainings: any;
  appliedTrainings: any;
  constructor(public ob: EmployeeservicesService, ob1: HrdbservicesService) {
    ob1.GetAllTraining().subscribe((r) => {
      ob.GetAppliedTrainings().subscribe((res) => {
        this.trainings = r.filter((b) => {
          if (res.map((a) => a.trainingId).includes(b.id)) {
            res.forEach((ma) => {
              if (ma.trainingId === b.id) {
                return {
                  ...b,
                  status: ma.status,
                  message: ma.message,
                };
              }
            });
          }
        });
      });
    });
  }

  ngOnInit(): void {}
}
