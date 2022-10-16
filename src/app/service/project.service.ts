import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Project} from "../model/Project";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectUrl = "http://localhost:4200/api/v1/project";

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.projectUrl}`, project);
  }
  constructor(private http: HttpClient) { }
}
