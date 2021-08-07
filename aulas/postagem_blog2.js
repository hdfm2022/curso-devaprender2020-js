console.log("Postagem_Blog2.js");

class Comentario {
    constructor(autor, mensagem) {
        this.autor = autor;
        this.mensagem = mensagem;
    }
}

function Postagem(titulo, mensagem, autor) {
    this.titulo = titulo;
    this.mensagem = mensagem;
    this.menautorsagem = autor;
    this.visualizacoes = 0;
    this.comentarios = [];
    this.live = false;
}

let postagem = new Postagem("Hello World", "bem vindo", "Henrique");
postagem.comentarios.push(new Comentario("Fernando", "Oi amigo"));
postagem.comentarios.push(new Comentario("Fernando", "Tchau amigo"));
console.log(postagem);