class SpaceshipWeapon {
  constructor(identifier) {
    this.identifier = identifier
    this.shotsLeft = 5
  }
  shoot() {
    if(this.shotsLeft > 0) {
      console.log('bang!')
      this.shotsLeft -= 1
    } else {
      throw new Error(`Arma sem munição ${this.identifier} sem munição`)
    }
  }
  reload() {
    this.shotsLeft = 5
  }
}

let fenixWeapon = new SpaceshipWeapon(10)


try {
  fenixWeapon.shoot()
  fenixWeapon.shoot()
  fenixWeapon.shoot()
  fenixWeapon.shoot()
  fenixWeapon.shoot()
  fenixWeapon.shoot()
} catch (e) {
  console.log(e.message)
  fenixWeapon.reload()
} finally {
  console.log('Bons tiros')
}




console.log(fenixWeapon)

