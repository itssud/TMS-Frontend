import { Component, OnInit } from '@angular/core';
import { HrdbservicesService } from '../hrdbservices.service';

@Component({
  selector: 'app-hr-training',
  templateUrl: './hr-training.component.html',
  styleUrls: ['./hr-training.component.scss'],
})
export class HrTrainingComponent implements OnInit {
  constructor(public ob: HrdbservicesService) {}

  ngOnInit(): void {}
  addTraining(f: any) {}
}
