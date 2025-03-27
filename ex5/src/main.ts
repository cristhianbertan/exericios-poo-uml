class Publicacao {
  protected titulo: string;
  protected autor: string;
  protected descricao: string;

  constructor(titulo: string, autor: string, descricao: string) {
    this.titulo = titulo;
    this.autor = autor;
    this.descricao = descricao;
  }

  exibirResumo(): string {
    return `Título: ${this.titulo}, Autor: ${this.autor}, Descrição: ${this.descricao}`;
  }
}

class Artigo extends Publicacao {
  private numeroDePalavras: number;

  constructor(
    titulo: string,
    autor: string,
    descricao: string,
    numeroDePalavras: number
  ) {
    super(titulo, autor, descricao);
    this.numeroDePalavras = numeroDePalavras;
  }

  exibirResumo(): string {
    return `${super.exibirResumo()}, Número de Palavras: ${
      this.numeroDePalavras
    }`;
  }
}

class Video extends Publicacao {
  private duracao: number;

  constructor(
    titulo: string,
    autor: string,
    descricao: string,
    duracao: number
  ) {
    super(titulo, autor, descricao);
    this.duracao = duracao;
  }

  exibirResumo(): string {
    return `${super.exibirResumo()}, Duração: ${this.duracao} segundos`;
  }
}

const artigo = new Artigo("Meu Artigo", "João", "Um artigo interessante", 1500);
console.log(artigo.exibirResumo());

const video = new Video("Meu Vídeo", "Maria", "Um vídeo legal", 360);
console.log(video.exibirResumo());
