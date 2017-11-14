import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

let HEADERS = new HttpHeaders()
  .append('Content-Type', 'application/vnd.api+json')
  .append('Accept', 'application/vnd.api+json');

@Injectable()
export class ChatService {
  private apiUrl = 'https://private-e46dd-orachallenge.apiary-mock.com/api/v1';
  public token: string;

  constructor(protected http: HttpClient) {}

  createSession() {
    const TOKEN = localStorage.getItem('id_token');

    if (TOKEN) HEADERS.append('Authorization', 'Bearer ' + TOKEN);
    // else, this.setSession(); 

    return this.http
      .post(`${this.apiUrl}/sessions`, 
        { "data": { "type": "sessions" }}, 
        { headers: HEADERS }
      );
  }

  setSession(authResult) {
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(7200));
  }       

  getMessages(): Observable<any> {
    const PARAMS = new HttpParams()
      .set('page[number]', '1')
      .set('page[size]', '5');

      return this.http
        .get(`${this.apiUrl}/messages`,
          { headers: HEADERS, params: PARAMS }
      );
  }

  addMessage(form: any): Observable<any> {
    const DATA = { type: 'messages', attributes: form };

    return this.http
      .post(
        `${this.apiUrl}/messages`, 
        { headers: HEADERS, data: DATA }
      );
  }
}
