import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './models/question';
import { Favorite } from './models/favorite';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7075/api';

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}/questions`);
  }

  getQuestion(id: number): Observable<Question> {
    return this.http.get<Question>(`${this.apiUrl}/questions/${id}`);
  }

  addQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(`${this.apiUrl}/questions`, question);
  }

  updateQuestion(id: number, question: Question): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/questions/${id}`, question);
  }

  deleteQuestion(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/questions/${id}`);
  }

  getFavorites(): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(`${this.apiUrl}/favorites`);
  }

  addFavorite(favorite: Favorite): Observable<Favorite> {
    return this.http.post<Favorite>(`${this.apiUrl}/favorites`, favorite);
  }

  removeFavorite(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/favorites/${id}`);
  }
}