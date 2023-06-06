import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Question } from '../models/question';
import { Favorite } from '../models/favorite';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionsListComponent implements OnInit {
  questions: Question[] = [];
  newQuestion: Question = {
    id: 0,
    questionTitle: '',
    answer: ''
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this.apiService.getQuestions().subscribe((questions) => {
      this.questions = questions;
    });
  }

  addToFavorites(question: Question): void {
    const favorite: Favorite = {
      id: 0, // Assign the appropriate ID

      questionId: question.id
    };
  
    this.apiService.addFavorite(favorite).subscribe(() => {
      // Add success logic if needed
    });
  }

  addQuestion(): void {
    this.apiService.addQuestion(this.newQuestion).subscribe((question) => {
      this.questions.push(question);
      this.newQuestion = {
        id: 0,
        questionTitle: '',
        answer: ''
      };
    });
  }

  removeQuestion(questionId: number): void {
    this.apiService.deleteQuestion(questionId).subscribe(() => {
      this.questions = this.questions.filter((question) => question.id !== questionId);
    });
  }
}
