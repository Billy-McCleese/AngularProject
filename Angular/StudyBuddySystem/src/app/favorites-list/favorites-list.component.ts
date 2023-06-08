import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Favorite } from '../models/favorite';
import { Question } from '../models/question';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {
  favorites: Favorite[] = [];
  questions: Question[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getFavorites();
    this.getQuestions();
  }

  getFavorites(): void {
    this.apiService.getFavorites().subscribe(favorites => {
      this.favorites = favorites;
    });
  }

  getQuestions(): void {
    this.apiService.getQuestions().subscribe(questions => {
      this.questions = questions;
    });
  }

  removeFavorite(favoriteId: number): void {
    this.apiService.removeFavorite(favoriteId).subscribe(() => {
      this.favorites = this.favorites.filter(f => f.id !== favoriteId);
    });
  }

  addFavorite(question: Question): void {
    // Check if the favorite already exists
    const existingFavorite = this.favorites.find(f => f.questionId === question.id);
    if (existingFavorite) {
      return; // Do not add duplicate favorite
    }

    const favorite: Favorite = {
      id: 0,
      questionId: question.id
    };

    this.apiService.addFavorite(favorite).subscribe(newFavorite => {
      this.favorites.push(newFavorite);
    });
  }

  getQuestionTitle(questionId: number): string {
    const question = this.questions.find(q => q.id === questionId);
    return question ? question.questionTitle : '';
  }
}