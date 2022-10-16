import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Indicator} from "../model/Indicator";

@Injectable({
  providedIn: 'root'
})
export class IndicatorService {

  private projectUrl = "http://localhost:4200/api/v1/indicator";

  addProject(indicator: Indicator): Observable<Indicator> {
    return this.http.post<Indicator>(`${this.projectUrl}`, indicator);
  }
  constructor(private http: HttpClient) { }
}
