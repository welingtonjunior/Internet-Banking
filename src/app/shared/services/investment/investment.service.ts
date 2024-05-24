import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class InvestmentService {
  private http = inject(HttpClient);
  private apiUrl = 'https://brapi.dev/api';
  private token = '9w4XAE1dmywnVsmyyUbY48';
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
  }

  getQuote(ticker?: string): Observable<any> {
    const endPoint = `/quote/${ticker}`;
    const url = `${this.apiUrl}${endPoint}`;

    return this.http.get(url, { headers: this.getHeaders() });
  }
  getAllQuotes(): Observable<any> {
    const endpoint = '/quote/list';
    const url = `${this.apiUrl}${endpoint}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }
}
