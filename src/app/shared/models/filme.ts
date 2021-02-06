export interface Filme {
  id?;
  titulo: string;
  urlFoto: string;
  dtLancamento: Date;
  descricao?: string;
  nota?: number;
  urlIMDb?: string;
  genero: string;
}
