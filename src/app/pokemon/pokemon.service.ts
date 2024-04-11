import { Injectable } from '@angular/core';
import { POKEMONS } from './api-pokemons';
import { Pokemon } from './pokemon.models';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      map(pokemons => pokemons)
    );
  }

  getPokemonById(pokemonId: number): Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId)
  }

  getTypesList(): string[] {
    return [
      'Feu', 
      'Eau', 
      'Plante',
      'Insecte',
      'Normal',
      'Vol',
      'Poison',
      'Fée',
      'Psy',
      'Electrik',
      'Combat'
    ]
  }
}
