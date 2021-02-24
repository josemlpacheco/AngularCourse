import { Component, OnInit} from '@angular/core';
import { PokemonService } from "../../../service/pokemon/pokemon.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  pokemon:any;
  pokemon_name: any;
  pokemon_list: any[] = [];

  constructor(public pokemonService: PokemonService) { }
  ngOnInit(): void{
    this.init();
  }

  getName(event:any){
    console.log('Father:',event);
    this.pokemon_name = event;
    this.init();
  }

  getPokemonList(pokemon_list:any[]){
    this.pokemon_list = pokemon_list;
    console.log('jala porfa',this.pokemon_list);
  }

  init(){

    this.pokemonService.getPokemonByID(this.pokemon_name || "1").then((res:any)=>{
      this.pokemon = res;
      console.log(res);
    }).catch((error:any)=>{
      console.log(error);
      
    });
  }

}
