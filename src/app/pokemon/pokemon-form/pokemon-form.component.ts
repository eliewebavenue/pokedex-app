import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon.models';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: 'pokemon-form.component.html',
  styles: []
})
export class PokemonFormComponent {
  @Input() pokemon: Pokemon|undefined;
  types: string[] = [];

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(){
    this.types = this.pokemonService.getTypesList();
  }

  hasType(type: string): boolean{
    return this.pokemon?.types.includes(type) || false
  } 

  selectType($event: Event, type: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked

    if(isChecked) {
      this.pokemon?.types.push(type)
    }else{
      const key = this.pokemon?.types.indexOf(type);
      if(key){
        this.pokemon?.types.splice(key, 1)
      }
    }
  }

  onSubmit(){
    if(this.pokemon){
      this.pokemonService.updatePokemon(this.pokemon).subscribe({
        next: (response) => {
          this.router.navigate(['/pokemon', this.pokemon?.id])
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }

}
