import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon/pokemon.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Output() pokemonList = new EventEmitter<any[]>();

  limit:any = 10;
  offset:any = 0;
  total:any;
  constructor(public pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonByPage(this.limit,this.offset).then((res:any)=>{
      this.pokemonList.emit(res.results);
      this.total = res.count;
    }).catch((err:any)=>{
      console.log(err);
    });
  }

  onPageActivated(event:any) {
    this.limit = event.pageSize;
    this.offset = (Number(event.pageIndex)) * Number(event.pageSize);

    console.log('limit',this.limit,'offset',this.offset);
    this.pokemonService.getPokemonByPage(this.limit,this.offset).then((res)=>{
      this.pokemonList.emit(res.results);
      console.log(res);
      this.total = res.count;
    }).catch((err:any)=>{
      console.log(err);
    })
  }
}
