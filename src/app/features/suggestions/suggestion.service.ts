import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Suggestion } from '../../models/suggestion';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  private suggestionsSubject = new BehaviorSubject<Suggestion[]>([
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: 'Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres.',
      category: 'Infrastructure et bâtiments',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      nbLikes: 10
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: 'Proposition pour améliorer la gestion des réservations en ligne.',
      category: 'Technologie et services numériques',
      date: new Date('2025-01-15'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: 'Programme de récompenses pour motiver les employés.',
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 4,
      title: 'Moderniser l\'interface utilisateur',
      description: 'Refonte complète de l\'interface utilisateur.',
      category: 'Technologie et services numériques',
      date: new Date('2025-01-30'),
      status: 'En attente',
      nbLikes: 0
    }
  ]);

  suggestions$ = this.suggestionsSubject.asObservable();

  constructor() {}

  getSuggestions(): Observable<Suggestion[]> {
    return this.suggestions$;
  }

  getSuggestionsSync(): Suggestion[] {
    return this.suggestionsSubject.value;
  }

  addSuggestion(suggestion: Suggestion): void {
    const currentSuggestions = this.suggestionsSubject.value;
    this.suggestionsSubject.next([...currentSuggestions, suggestion]);
  }

  getSuggestionById(id: number): Suggestion | undefined {
    return this.suggestionsSubject.value.find(s => s.id === id);
  }
}
