import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Favorite } from '../models/favorite';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {
  favorites!: Favorite[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites(): void {
    this.apiService.getFavorites()
      .subscribe(favorites => this.favorites = favorites);
  }

  removeFavorite(id: number): void {
    this.apiService.removeFavorite(id)
      .subscribe(() => {
        this.favorites = this.favorites.filter(favorite => favorite.id !== id);
      });
  }
}
