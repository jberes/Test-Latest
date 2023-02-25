import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Customer370DashboardsService {
  constructor(
    private http: HttpClient
  ) { }

  public getDashboards(): Observable<any> {
    return this.http.get("https://excel2json.io/api/share/9e370bb8-61ed-419c-00ab-08da188ec9ab");
  }
}
