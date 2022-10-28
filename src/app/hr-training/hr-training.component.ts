import { Component, OnInit } from '@angular/core';
import { HrdbservicesService } from '../hrdbservices.service';

@Component({
  selector: 'app-hr-training',
  templateUrl: './hr-training.component.html',
  styleUrls: ['./hr-training.component.scss'],
  providers: [HrdbservicesService],
})
export class HrTrainingComponent implements OnInit {
  trainings: any;
  constructor(public ob: HrdbservicesService) {
    ob.GetAllTraining().subscribe((res) => (this.trainings = res));
  }
  result: any;
  ngOnInit(): void {}
  addTraining(frm: any) {
    this.ob
      .AddTraining(frm)
      .subscribe(
        (res) =>
          (this.result =
            res > 0
              ? 'New Training Created Successfully'
              : 'Error Occured Please Try Again')
      );
  }
}
