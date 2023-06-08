import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsListComponent } from './question-list/question-list.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsListComponent,
    QuestionDetailsComponent,
    FavoritesListComponent,
    AddQuestionComponent,
    WelcomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
