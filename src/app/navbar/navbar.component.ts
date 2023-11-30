import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentSearchTerm = '';

  constructor(private searchService: SearchService) { }

  onSearch(): void {
    this.searchService.addSearch(this.currentSearchTerm);
    this.currentSearchTerm = '';
  }
}
