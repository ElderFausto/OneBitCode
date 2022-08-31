let casa = {
  nome: 'casarao',
  numero: 120,
  comodos: 5
}

let {nome, numero} = casa

console.log(nome, numero)


let cores = ['amarelo', 'vermelho', 'verde']

let [amarelo, vermelho, verde] = cores

console.log(amarelo, vermelho, verde)

let apartamento = ['quarto', 'cozinha', 'banheiro']

function printApartamento([quarto, cozinha, banheiro, sala]) {
  console.log(quarto, banheiro, cozinha, sala)
}

printApartamento(apartamento)