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
  appliedTrainings: any[] = [];
  constructor(public ob: EmployeeservicesService, ob1: HrdbservicesService) {
    ob1.GetAllTraining().subscribe((r) => {
      ob.GetAppliedTrainings().subscribe((res) => {
        this.appliedTrainings = res;
        this.trainings = r.filter((b) =>
          res.map((a) => a.trainingId).includes(b.id)
        );

        this.trainings = this.trainings.map((train: any) => {
          res.forEach((at) => {
            if (at.trainingId === train.id) {
              return { ...train, status: at.status, message: at.message };
            }
          });
        });
      });
    });
  }

  ngOnInit(): void {}
}
