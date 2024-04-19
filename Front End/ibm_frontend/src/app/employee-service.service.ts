import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  //declare url end points

  private baseURL = 'http://localhost:8085/ibm/empolyee';

  constructor(private httpClient: HttpClient) {}
  addEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/add`, employee);
  }

  // get service information
  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}/`);
  }
  //get employee information by id
  getempdataByid(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }
  //update employee information by id
  EditEmployeedataById(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/update/${id}`, employee);
  }
  deleteEmpdataById(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
}
