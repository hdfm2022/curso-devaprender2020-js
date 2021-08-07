console.log("Postagem_Blog.js");

class Comentario {
    constructor(autor, mensagem) {
        this.autor = autor;
        this.mensagem = mensagem;
    }
}

class Postagem {
    constructor(titulo, mensagem, autor, visualizacoes, comentarios = [], live = true) {
        this.titulo = titulo;
        this.mensagem = mensagem;
        this.menautorsagem = autor;
        this.visualizacoes = visualizacoes;
        this.comentarios = comentarios;
        this.live = live;
    }
}

let postagem = new Postagem("Hello World", "bem vindo", "Henrique", 142, []);
postagem.comentarios.push(new Comentario("Fernando", "Oi amigo"));
postagem.comentarios.push(new Comentario("Fernando", "Tchau amigo"));
console.log(postagem);