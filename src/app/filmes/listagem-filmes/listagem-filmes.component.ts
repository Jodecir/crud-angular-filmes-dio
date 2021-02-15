import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { FilmesService } from 'src/app/core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';

@Component({
  selector: 'dio-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

  readonly qtdPagina = 4;
  filmes: Filme[] = [];
  pagina = 1;
  filterList: FormGroup;
  generos: Array<string>;

  constructor(
    private FilmesService: FilmesService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.filterList = this.fb.group({
      texto: [''],
      genero: ['']
    });

    this.generos = ['Ação' , 'Aventura' , 'Comédia' , 'Drama' ,'Romance' , 'Ficção Científica' , 'Terror'];
    this.listarFilmes();
  }

  onScroll(): void {
    this.listarFilmes();
  }

  private listarFilmes(): void {
    this.pagina++;
    this.FilmesService.listar(this.pagina, this.qtdPagina)
    .subscribe((filmes: Filme[]) => this.filmes.push(...filmes));
  };

}
