import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HrEmployeeComponent } from './hr-employee/hr-employee.component';
import { HrTrainingComponent } from './hr-training/hr-training.component';
import { LoginComponent } from './login/login.component';
import { MasterComponent } from './master/master.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HrEmployeeComponent,
      },
      {
        path: 'training',
        component: HrTrainingComponent,
      },
    ],
  },

  {
    path: '**',
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
