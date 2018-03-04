# Angular-Tutorials

HTTP1: HTTP Client

1. App module

import { HttpClientModule } from '@angular/common/http';   
import { EmployeeService } from './employee.service';


  imports: [
    BrowserModule,
    HttpClientModule    
  ],

2. Employee service

import {HttpClient} from '@angular/common/http';   // http request
import { Observable } from 'rxjs/Observable'  //Reactive extension for javascript      "rxjs": "^5.5.2",

  private _url: string = "/assets/data/employees.json"

  constructor(private http: HttpClient) { }     // DI

  getEmployees():Observable<IEmployee[]>{
      return this.http.get<IEmployee[]>(this._url);
  }

3. child components

import { EmployeeService } from './../employee.service';

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
      this._employeeService.getEmployees()
        .subscribe(data => this.employees = data,
                  error => this.errorMsg = error);

  }

 
