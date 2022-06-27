class App {
  constructor() {
    this.spaceship = null
  }

  start() {
    let choseOption
    do {
      choseOption = this.showInitialMenu()
      this.redirectFeature(choseOption)
    } while (choseOption != '3')
    this.printAndExit()
  }

  enrollSpaceship() {
    let spaceshipName = prompt('Qual o nome da nave')
    let crewQuantity = prompt('Qual a quantidade de tripulantes')
    let spaceshipKind = this.askForSpaceshipKind()
    if (spaceshipKind == 1) {
      let weaponQuantity = prompt('Quantas armas a nave possui')
      this.spaceship = new BattleSpaceship(spaceshipName, crewQuantity, weaponQuantity)
    } else {
      let sitsQuantity = prompt('Quantos assentos a nave possui')
      this.spaceship = new TransportSpaceship(spaceshipName, crewQuantity, sitsQuantity)
    }
  }

  askForSpaceshipKind() {
    let choseOption
    while (!['1', '2'].includes(choseOption)) {
      choseOption = prompt('Qual o tipo da nave?\n 1- batalha\n2- transporte')
    }
    return choseOption
  }

  showInitialMenu() {
    const promtMessage = `O que deseja fazer ?
    1- acelerar a nave
    2- trocar a nave
    3- imprimir e sair`

    let choseOption = prompt(promtMessage)
    while (!['1', '2', '3'].includes(choseOption)) {
      choseOption = prompt(promtMessage)
    }
    return choseOption
  }

  redirectFeature(choseOption) {
    switch (choseOption) {
      case '1':
        this.accelerateSpaceship()

      case '2':
        this.enrollSpaceship()
    }
  }
  accelerateSpaceship() {
    let accelerateSpaceship = Number(prompt('Quanto gostaria de acelerar ?'))
    this.spaceship.speedUp()
  }

  printAndExit() {
    let finalMessage = `Nome: ${this.spaceship.name} 
    Quantidade de tripulantes ${this.spaceship.crewQuantity}
    Velocidade Atual: ${this.spaceship.currentVelocity}`
  }
}