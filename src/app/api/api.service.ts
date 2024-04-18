import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Api } from '../models/api';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.apiBaseUrl;

  constructor(private client: HttpClient) { }

  getAll(): Observable<Api[]> {
    return this.client.get<Api[]>(`${this.baseUrl}/apis`);
  }

}
