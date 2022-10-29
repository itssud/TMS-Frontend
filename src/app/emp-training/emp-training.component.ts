import { Component, OnInit } from '@angular/core';
import { EmployeeservicesService } from '../employeeservices.service';
import { HrdbservicesService } from '../hrdbservices.service';

@Component({
  selector: 'app-emp-training',
  templateUrl: './emp-training.component.html',
  styleUrls: ['./emp-training.component.scss'],
  providers: [HrdbservicesService, EmployeeservicesService],
})
export class EmpTrainingComponent implements OnInit {
  trainings: any;
  constructor(
    public ob: HrdbservicesService,
    public ob1: EmployeeservicesService
  ) {
    ob.GetAllTraining().subscribe((res) => (this.trainings = res));
  }

  applyTraining(trainingInfo: any) {
    let empInfo = sessionStorage.getItem('empInfo');
    let payload = {
      TrainingId: trainingInfo.id,
      EmployeeId:
        empInfo &&
        JSON.parse(sessionStorage.getItem('empInfo') as string)[0]['id'],
      Status: 'Pending',
    };
    this.ob1.ApplyTraining(payload).subscribe((res) => console.log(res));
  }

  ngOnInit(): void {}
}
