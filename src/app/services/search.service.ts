import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchHistory: string[] = [];

  addSearch(term: string): void {
    this.searchHistory.push(term);
  }
}
