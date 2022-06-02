let nameShip = prompt('Digite o nome da espaço-nave: ');
let velocity = 0;
let chosenOption

function showMenu() {
  let option
  while (option != '1' && option != '2' && option != '3' && option != '4') {
    option = prompt(`O que deseja fazer?\n
      1- acelerar a nave em 5km/s\n
      2- desacreditar a nave em 5km/s\n
      3- imprimir dados de bordo\n
      4- sair do programa`)
  }
  return option;
}

function speedUp(velocity) {
  let newVelocity = velocity + 5;
  return newVelocity;
}

function slowDown(velocity) {
  let newVelocity = velocity - 5;
  if (newVelocity < 0) {
    newVelocity = 0
  }
  return newVelocity;
}

function printSpaceshipData(name, velocity) {
  alert(`${nameShip} está a ${velocity}km/s`)
}

do {
  chosenOption = showMenu();
  switch(chosenOption) {
    case '1':
      velocity = speedUp(velocity);
      break
    case '2':
      velocity = slowDown(velocity);
      break
    case '3':
      printSpaceshipData(nameShip, velocity);
    default:
      alert('encerrando programa de bordo')       
  }
} while (chosenOption != '4')