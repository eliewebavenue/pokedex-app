import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon.models';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent {

  pokemonList: Pokemon[] = []
  pokemon: Pokemon|undefined

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService){}

  ngOnInit(){
    /* Récupère l'id passé dans l'url par exemple : pokemon/4 => pokemonId va etre égale a 4 */
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId)
    }
  }

  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }
  goToPokemonEdit(pokemon: Pokemon){
    this.router.navigate(['/edit/pokemon', pokemon.id]);
  }
}
