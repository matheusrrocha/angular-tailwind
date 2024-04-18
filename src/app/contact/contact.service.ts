import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl = environment.apiBaseUrl;

  constructor(private client: HttpClient) { }

  create(contact: Contact): Observable<void> {
    return this.client.post<void>(`${this.baseUrl}/contacts`, contact);
  }
}
