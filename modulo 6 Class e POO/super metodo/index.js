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
  constructor (name, maxCrew, maxRecommendedVelocity, maxLoadWeight) {
    super(name, maxCrew, maxRecommendedVelocity)
    this.maxLoadWeight = maxLoadWeight
  }

  speedUp(acceleration) {
    acceleration /= 2
    alert(`Incrementando velocidade em ${acceleration} km/s`)
    super.speedUp(acceleration) 
  }
}

let transportSpaceship = new TransportSpaceship('Transportadora', 4, 100, 400)

console.log(transportSpaceship)

transportSpaceship.speedUp(210)