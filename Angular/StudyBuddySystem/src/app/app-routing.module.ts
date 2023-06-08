import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsListComponent } from './question-list/question-list.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/questions', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/questions', pathMatch: 'full' },
  { path: 'questions', component: QuestionsListComponent },
  { path: 'questions/:id', component: QuestionDetailsComponent },
  { path: 'favorites', component: FavoritesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

