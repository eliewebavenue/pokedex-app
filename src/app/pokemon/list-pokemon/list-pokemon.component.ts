import { Component } from '@angular/core';
import { Pokemon } from '../pokemon.models';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent {
  pokemonList: Pokemon[]|undefined = [];
  pokemonSelected: Pokemon|undefined;

  constructor(private router: Router, private pokemonService: PokemonService){}

  ngOnInit(){
    this.pokemonService.getPokemonList()
    .subscribe({
      next: (pokemons) =>{
        this.pokemonList = pokemons
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
  
  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon.id])
    /* /pokemon/6 */
  }
}
