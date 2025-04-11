import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-display.component.html',
  styleUrl: './pokemon-display.component.scss'
})
export class PokemonDisplayComponent {
  @Input() pokemonImageUrl!: string;
  @Input() pokemonNumber!: number;
  @Input() pokemonName!: string;
}
