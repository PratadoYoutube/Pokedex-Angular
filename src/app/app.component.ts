import { Component } from '@angular/core';
import { PokemonDisplayComponent } from "./components/pokemon-display/pokemon-display.component";
import { SearchFormComponent } from "./components/search-form/search-form.component";
import { NavigationButtonsComponent } from "./components/navigation-buttons/navigation-buttons.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PokemonDisplayComponent, SearchFormComponent, NavigationButtonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  pokemonName: string = 'pikachu';
  pokemonNumber: number = 25;
  pokemonImageUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png';

  onSearchPokemon(term: string) {
    console.log('Buscando por:', term);
    // Aqui você pode fazer a chamada à API futuramente
    // Por enquanto, só atualizar os dados manualmente para testes:
    this.pokemonName = term.toLowerCase();
    this.pokemonNumber = 999; // Exemplo fixo
    this.pokemonImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png'; // Exemplo fixo
  }
}
