const spaceship = {
  name: "Rontaro",
  currentBateryCharge: 70,
  consumptionPerKms: 0.00008
}

const updateBateryCharge = function (chargeConsumed) {
  return new Promise((resolve, reject) => {
    spaceship.currentBateryCharge -= chargeConsumed
    if (spaceship.currentBateryCharge > 0) {
      resolve(spaceship.currentBateryCharge)
    } else {
      reject("Bateria esgotada! Nave será desativada em alguns segundos.")
    }
  })
}

const calculateBateryConsumption = function (velocity, hours) {
  return new Promise((resolve, reject) => {
    if (spaceship.consumptionPerKms <= 0 || velocity <= 0) {
      reject("Nave está parada!")
    } else {
      let chargeConsumed = spaceship.consumptionPerKms * velocity * hours
      resolve(chargeConsumed)
    }
  })
}

calculateBateryConsumption(100, 5).then(chargeConsumed => {
  return updateBateryCharge(10)
}).then(newCharge => {
  console.log(`Carga atual ${newCharge}`)
}).catch(error => {
  console.log(error)
})
