import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ParentProjectList} from "../model/ParentProjectList";

@Injectable({
  providedIn: 'root'
})
export class ParentProjectListService {

  private parentProjectListUrl = "http://localhost:4200/api/v1/parentProjectList";

  constructor(private http:HttpClient) { }

  getParentProjectList():Observable<ParentProjectList []>{
    return this.http.get<ParentProjectList[]>(`${this.parentProjectListUrl}`);
  }
}
