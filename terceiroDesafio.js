class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } 
    

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de uso:

const heroi1 = new Heroi("Seya", 30, "guerreiro");
const heroi2 = new Heroi("Harry", 150, "mago");
const heroi3 = new Heroi("Shaolin", 40, "monge");
const heroi4 = new Heroi("Jack Shan", 25, "ninja");

heroi1.atacar(); 
heroi2.atacar(); 
heroi3.atacar(); 
heroi4.atacar(); 