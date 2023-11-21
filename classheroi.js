class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      const ataque = this.tipo === "mago" ? "magia" :
        this.tipo === "guerreiro" ? "espada" :
        this.tipo === "monge" ? "artes marciais" :
        this.tipo === "ninja" ? "shuriken" :
        "desconhecido";
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  const mago = new Heroi("Gandalf", 2000, "mago");
mago.atacar();
