import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  nome : string = '';
  pessoas : any;
  pessoasFiltradas: any;
  
  constructor() { 
    this.pessoas = [
      {id: 1, idade: 47, nome:"José"},
      {id: 2, idade: 39, nome:"Adriana"},
      {id: 3, idade: 21, nome:"Leandro"},
      {id: 4, idade: 19, nome:"Pedro"},
      {id: 5, idade: 17, nome:"Arthur"},
      {id: 6, idade: 13, nome:"Eduardo"},
      {id: 7, idade: 11, nome:"Samuel"},
      {id: 8, idade: 7, nome:"Marcos"},
      {id: 9, idade: 5, nome:"Júnior"},
    ];

    this.pessoasFiltradas = this.pessoas;
  }

  ngOnInit() {
  }

  filtrarItens(event:any){
    this.nome = event.target.value.toLowerCase();

    this.pessoasFiltradas = this.filtrarPessoas(this.nome);
  }

  filtrarPessoas(nome : any) {
    this.pessoasFiltradas = this.pessoas;

    return this.pessoasFiltradas.filter((item : any) => {
      return item.nome.toLowerCase().includes(nome.toLowerCase());
    });
  }

}
