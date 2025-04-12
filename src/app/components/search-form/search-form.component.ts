import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss'
})
export class SearchFormComponent {
  search: string = '';

  @Output() searchPokemon = new EventEmitter<string>();

  onSearch() {
    this.searchPokemon.emit(this.search.trim());
  }
}
