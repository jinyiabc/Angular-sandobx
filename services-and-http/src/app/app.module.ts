import { BrowserModule } from '@angular/platform-browser';
import { NgModule,forwardRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';    // http
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule      // http
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
