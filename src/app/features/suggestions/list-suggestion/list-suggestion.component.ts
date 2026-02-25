import { Component, OnInit, OnDestroy } from '@angular/core';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../suggestion.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css']
})
export class ListSuggestionComponent implements OnInit, OnDestroy {

  searchText: string = '';

  favorites: Suggestion[] = [];

  suggestions: Suggestion[] = [];

  private destroy$ = new Subject<void>();

  constructor(private suggestionService: SuggestionService) { }

  ngOnInit(): void {
    this.suggestionService.getSuggestions()
      .pipe(takeUntil(this.destroy$))
      .subscribe(suggestions => {
        this.suggestions = suggestions;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  likeSuggestion(s: Suggestion) {
    s.nbLikes++;
  }

  addToFavorites(s: Suggestion) {
    if (!this.favorites.includes(s)) {
      this.favorites.push(s);
    }
  }

  get filteredSuggestions(): Suggestion[] {
    return this.suggestions.filter(s =>
      s.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      s.category.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
