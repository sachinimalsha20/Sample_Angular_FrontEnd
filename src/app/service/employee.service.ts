import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, Observable} from "rxjs";
import {Employee} from "../model/Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private serviceUrl = "http://localhost:4200/api/v1/employees";

  constructor(private http: HttpClient) {}

  // getEmployee(): Observable<Employee[]> {
  //   return this.http.get(this.serviceUrl).pipe<Employee[]>(map((data: any) => data.employee));
  // }

  getEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.serviceUrl}`);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.serviceUrl}/${employee.id}`, employee);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.serviceUrl}`, employee);
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.serviceUrl}/${id}`);
  }

  deleteEmployees(users: Employee[]): Observable<Employee[]> {
    return forkJoin(
      users.map((employee) =>
        this.http.delete<Employee>(`${this.serviceUrl}/${employee.id}`)
      )
    );
  }
}
