import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RatingsService {
  private reviewUrl = 'http://localhost:3000/api/v1/reviews';
  constructor(private http: HttpClient) {}

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  // };

  getAllReviews(): Observable<any> {
    return this.http.get<any>(this.reviewUrl);
  }

  getRevById(id): Observable<any> {
    return this.http.get<any>(this.reviewUrl + '/' + id);
  }

  createReview(data): Observable<any> {
    return this.http.post<any>(
      this.reviewUrl,
      data
      // this.httpOptions
    );
  }

  updateRevById(id, updateData): Observable<any> {
    return this.http.patch<any>(
      this.reviewUrl + '/' + id,
      updateData
      // this.httpOptions
    );
  }
}
