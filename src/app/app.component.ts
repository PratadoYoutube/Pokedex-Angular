import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { CommonModule } from '@angular/common';
import { PokemonDisplayComponent } from './components/pokemon-display/pokemon-display.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { NavigationButtonsComponent } from './components/navigation-buttons/navigation-buttons.component';
import { PokedexContainerComponent } from './components/pokedex-container/pokedex-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PokemonDisplayComponent,
    SearchFormComponent,
    NavigationButtonsComponent,
    PokedexContainerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  pokemonName = '';
  pokemonNumber = 0;
  pokemonImageUrl = '';
  currentPokemonId: number = 1;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.fetchPokemon(this.currentPokemonId);
  }

  fetchPokemon(id: number | string) {
    this.pokemonService.getPokemon(id).subscribe({
      next: (data) => {
        this.pokemonName = data.name;
        this.pokemonNumber = data.id;
        this.pokemonImageUrl =
          data.sprites.versions['generation-v']['black-white'].animated.front_default ||
          data.sprites.other['official-artwork'].front_default ||
          data.sprites.front_default;

        this.currentPokemonId = data.id;
      },
      error: (err) => {
        console.error('Pokémon não encontrado:', err);
        this.pokemonName = 'Não encontrado';
        this.pokemonNumber = 0;
        this.pokemonImageUrl = '';
      }
    });
  }

  onSearchPokemon(term: string) {
    this.fetchPokemon(term.toLowerCase());
  }

  onPrevPokemon() {
    if (this.currentPokemonId > 1) {
      this.fetchPokemon(this.currentPokemonId - 1);
    }
  }

  onNextPokemon() {
    this.fetchPokemon(this.currentPokemonId + 1);
  }
}
