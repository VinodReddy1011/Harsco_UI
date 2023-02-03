import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,catchError,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this._http.post('https://localhost:7276/api/Employee/CreateEmployeeDetails', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    data.id=id;
    return this._http.put('https://localhost:7276/api/Employee/UpdateEmployeeDetails', data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('https://localhost:7276/api/Employee');
  }

  //deleteEmployee(id: number): Observable<any> {
    // return this._http.delete(`http://localhost:53535/api/employee/${id}`);
    //return this._http.delete(`https://localhost:7276/api/Employee/DeleteEmployeeDetails/{id}`);
  //}

  deleteEmployee(id: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this._http.delete<boolean>('https://localhost:7276/api/employee/DeleteEmployeeDetails', { params: queryParams }).pipe(catchError(errorResponse => {
      return throwError(errorResponse);
    }))
  }



}
