import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:5068';
  public headers = new HttpHeaders({
    'Content-Type': 'application/json', 
  });

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    // Configure the request options
    const requestOptions = {
      headers: this.headers,
      withCredentials: true, // If you need to send credentials (cookies, HTTP authentication)
    };
    return this.http.get(`/api/Products`, requestOptions);
  }

  getProductById(productId: number): Observable<any> {
    const requestOptions = {
      headers: this.headers,
      withCredentials: true,
    };
    const url = `/api/Products/${productId}`;
    return this.http.get(url, requestOptions);
  }

  // group
  getGroup(): Observable<any> {
    const requestOptions = {
      headers: this.headers,
      withCredentials: true,
    };
    return this.http.get(`/api/Groups`, requestOptions);
  }

   // subGroup
   getSubGroup(): Observable<any> {
    const requestOptions = {
      headers: this.headers,
      withCredentials: true, 
    };
    console.log('LOG getSubGroup', requestOptions, this.apiUrl)
    return this.http.get(`/api/SubGroups`, requestOptions);
  }

}
