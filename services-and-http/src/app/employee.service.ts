import { Injectable } from '@angular/core';
import {IEmployee} from './employee';
import {HttpClient} from '@angular/common/http';   // http request
import { Observable } from 'rxjs/Observable'  // Rxjs lib Reactive extension for javascript     "rxjs": "^5.5.2",
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class EmployeeService {

    private _url: string = "/assets/data/employees.json"

  constructor(private http: HttpClient) { }     // DI

  getEmployees():Observable<IEmployee[]>{
      return this.http.get<IEmployee[]>(this._url)
                      .catch(this.errHandler);
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}
