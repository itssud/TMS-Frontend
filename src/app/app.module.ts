import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MasterComponent } from './master/master.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { HrComponent } from './hr/hr.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { HrEmployeeComponent } from './hr-employee/hr-employee.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HrTrainingComponent } from './hr-training/hr-training.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MasterComponent,
    HomeComponent,
    EmployeeComponent,
    HrComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HrEmployeeComponent,
    PagenotfoundComponent,
    HrTrainingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [MasterComponent],
})
export class AppModule {}
