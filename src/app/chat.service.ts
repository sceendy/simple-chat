import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatService {
  private apiUrl = 'https://private-e46dd-orachallenge.apiary-mock.com/api/v1';

  constructor(protected http: HttpClient) { }

  createSession() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/vnd.api+json');
    headers.append('Accept', 'application/vnd.api+json');

    return this.http
      .post(
        `${this.apiUrl}/sessions`, 
        { "type": "sessions" }, 
        { headers: headers }
    );
  }

  getMessages(): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/messages`);
  }
}
