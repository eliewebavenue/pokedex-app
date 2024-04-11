import { Injectable } from '@angular/core';
import { POKEMONS } from './api-pokemons';
import { Pokemon } from './pokemon.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getPokemonById(pokemonId: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      map(pokemon => pokemon)
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}) 
    }

    return this.http.put<boolean>('api/pokemons', pokemon, httpOptions).pipe(
      map(response => response)
    );
  }
  deletePokemon(pokemonId: number): Observable<boolean> {
    return this.http.delete<boolean>(`api/pokemons/${pokemonId}`).pipe(
      map(response => response)
    );
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
