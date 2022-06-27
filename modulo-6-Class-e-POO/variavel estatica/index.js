class Spaceship {
  static get deceleration() {
    return 0.15
  }

  constructor(name) {
    this.name = name
    this.currentVelocity = 0
  }
  
  speedUp(acceleration) {
    this.currentVelocity += (acceleration * (1 - Spaceship.deceleration))
  }
}

let spaceship = new Spaceship('lol')

spaceship.speedUp(100)

console.log(spaceship)