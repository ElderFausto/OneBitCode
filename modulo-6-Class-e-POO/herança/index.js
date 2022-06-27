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


class BattleSpaceship extends Spaceship {
  stop() {
    this.currentVelocity = 0
    alert('Parando nave de batalha')
  }
}

class DiscoverySpaceship extends Spaceship {
  stop() {
    this.currentVelocity = 0
    alert('Recolhendo equipamentos')
  }
}

let darwin = new DiscoverySpaceship('darwin', 10, 200)
let fenix = new BattleSpaceship('fenix', 8, 240)

console.log(darwin)
console.log(fenix)


