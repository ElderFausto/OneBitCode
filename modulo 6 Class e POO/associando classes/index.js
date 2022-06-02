class Nave {
  constructor(nome, tipo, tripulantes) {
    this.nome = nome
    this.tipo = tipo
    this.tripulantes = tripulantes
  }
}

class Nave2 {
  constructor(nome, velocidade, fibra, tripulantes) {
    this.nome = nome
    this.velocidade = velocidade
    this.fibra = fibra
    this.tripulantes = tripulantes
    this.nave = new Nave(velocidade, fibra, tripulantes)
  }
}

let naveGeral = new Nave2('tody', 30, 'vidro', 50)

console.log(naveGeral)