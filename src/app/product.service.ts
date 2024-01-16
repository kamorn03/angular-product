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

    return this.http.get(`/api/SubGroups`, requestOptions);
  }

  // subGroup by group
  getSubGroupฺฺByGroup(groupId: number): Observable<any> {
    const requestOptions = {
      headers: this.headers,
      withCredentials: true,
    };

    return this.http.get(`/api/Products/${groupId}/SubGroups`, requestOptions);
  }


  // status
  updateStatus(productId: number, status: boolean): Observable<any> {
    const requestOptions = {
      headers: this.headers,
      withCredentials: true
    };

    const body = {
      isActive: status
    };

    return this.http.patch(`/api/Products/${productId}/update-status`, body, requestOptions);
  }


  // softDelete
  softDelete(productId: number): Observable<any> {
    const requestOptions = {
      headers: this.headers,
      withCredentials: true,
    };

    return this.http.patch(`/api/Products/${productId}/soft-delete`, requestOptions);
  }


  // search data
  searchDataApi(params: object): Observable<any> {
    const requestOptions = {
      headers: this.headers,
      withCredentials: true,
    };

    return this.http.post(`/api/search`, params, requestOptions);
  }

}
