/* 

Faremos um aplicativo que fara o mapeamento de velocidade de uma espaçonave

Neste aplicativo, vamos cadastrar uma espaçonave com seu nome, tipo e a velocidade maxima
que esta nave pode atingir para que não entre em combustão 

nave deve partir da velocidade 0kms

menu deve ser exibido para o usuário perguntando se ele quer acelerar ou para a nave

Se ele quiser parar, uma mensagem deve ser exibida com as caracteírsticas da nave (nome e tipo)
e em que velocidade estava

 se ele quiser acelerar, deve ser exibido um prompt para que ele informe quanto ele quer acelerar e este valor
será incrementando na velocidade

Quando a velocidade for incrementanda, deve-se fazer uma verificaçaõ para ver se a espaçonave está acima da velocidade
maxima dela, se ela estiver, uma mensagem deve ser exibida informando a velocidade da nave e a velocidade máxima permitida. 

*/

let spaceship = {
  velocity: 0,
  speedUp: function (accelaration) {
    this.velocity += accelaration
  }
}

function registerSpaceship () {
  spaceship.name = prompt('Informe o nome da nave')
  spaceship.type = prompt('Informe o tipo da nave')
  spaceship.maxVelocity = prompt('Informe a velocidade maxima da nave (Km/s)')
}

function acelerate () {
  let accelaration = Number(prompt('Quanto você quer acelerar ? (Km/s'))

  spaceship.speedUp(accelaration)

  if (spaceship.velocity > spaceship.maxVelocity) {
    alert(`Velocidade maxima ultrapassada!
    Velocidade da Nave: ${spaceship.velocity} (Km/s)
    Velocidade maxima da Nave: ${spaceship.maxVelocity} (Km/s)
    `)
  }
}

function stop () {
  alert(`Nome: ${spaceship.name} 
  Tipo: ${spaceship.type}
  Velocidade da nave: ${spaceship.velocity}
  Velocidade maxima: ${spaceship.maxVelocity}
  `)

  spaceship.velocity = 0
}

function showMenu () {
  let chosenOption = prompt(`Você deseja: 1 - Acelerar
  2- Parar`)

  do {
    switch(chosenOption) {
      case '1':
        acelerate()
        break
      case '2':
        stop()
        break
      default:
        alert('Opção invalida')
    }
  } while (chosenOption != '2')
}

registerSpaceship()
showMenu()