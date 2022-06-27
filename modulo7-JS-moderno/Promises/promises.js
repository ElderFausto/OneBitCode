let carro = {
  nome: 'fusca',
  velocidade: 60,
  aceleracao: 0
}

// catch pega o reject quando a aceleração esta no 0
// then pega o resolve quando a aceleração esta positiva

const aceleracaoSegundos = (velocidade, aceleracao) => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      if(aceleracao > 0) {
        velocidade += aceleracao * 2
        console.log(`Nova velocidade ${velocidade}`)
        resolve(velocidade)
      } else {
        console.log('Aceleração invalida')
        reject('Não possui aceleração')
      }
    }, 2000)
  })
}

aceleracaoSegundos(carro.velocidade, carro.aceleracao).then(velocidade => {
  carro.velocidade = velocidade
  console.log("Depois de acelerar", carro)
}).catch(message => {
  console.log(`Carro: ${message}`)
})

console.log('Execução de Promises')
console.log(carro)