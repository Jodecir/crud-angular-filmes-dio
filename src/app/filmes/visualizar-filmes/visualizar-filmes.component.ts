import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FilmesService } from 'src/app/core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';


@Component({
  selector: 'dio-visualizar-filmes',
  templateUrl: './visualizar-filmes.component.html',
  styleUrls: ['./visualizar-filmes.component.scss']
})
export class VisualizarFilmesComponent implements OnInit {
  readonly semFoto = 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg';
  filme: Filme;
  id: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmesService: FilmesService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.visualizar();
  }

  private visualizar(): void {
    this.filmesService.visualizar(this.id).subscribe((filme: Filme) => this.filme = filme);
  }
}
