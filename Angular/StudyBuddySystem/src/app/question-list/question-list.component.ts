import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Question } from '../models/question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions!: Question[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this.apiService.getQuestions()
      .subscribe(questions => this.questions = questions);
  }
}