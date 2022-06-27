/* let apartamento = ['quarto', 'cozinha', 'banheiro']

console.log(...apartamento)
 */

function corrida(velocidade, aceleracao) {
  return velocidade + aceleracao
}

let velocidadeCarro = [30, 40]

let novaVelocidade = corrida(...velocidadeCarro)

console.log(novaVelocidade)