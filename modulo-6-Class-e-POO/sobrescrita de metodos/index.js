class Spaceship {
  constructor(name, maxCrew, maxRecommendedVelocity) {
    this.name = name
    this.maxCrew = maxCrew
    this.maxRecommendedVelocity = maxRecommendedVelocity
    this.currentVelocity = 0
  }

  speedUp(acceleration) {
    this.currentVelocity += acceleration
    if(this.currentVelocity > this.maxRecommendedVelocity) {
      alert('Velocidade maxima ultrapassada')
    }
  }
}

class TransportSpaceship extends Spaceship {
  speedUp() {
    alert('Naves de transport so aumentam a velocidade em 1 km/s')
    this.currentVelocity += 1
  }
}

let transportSpaceship = new TransportSpaceship('transportadora', 4, 160)

transportSpaceship.speedUp()

console.log(transportSpaceship)