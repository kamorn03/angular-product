import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:5068/api';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Set the appropriate content type
      // Add any other custom headers if needed
    });

    // Configure the request options
    const requestOptions = {
      headers: headers,
      withCredentials: true, // If you need to send credentials (cookies, HTTP authentication)
    };
    return this.http.get(`/api/Products`, requestOptions);
  }

  getProductById(productId: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Set the appropriate content type
      // Add any other custom headers if needed
    });

    // Configure the request options
    const requestOptions = {
      headers: headers,
      withCredentials: true, // If you need to send credentials (cookies, HTTP authentication)
    };
    const url = `/api/Products/${productId}`;
    return this.http.get(url, requestOptions);
  }
}
