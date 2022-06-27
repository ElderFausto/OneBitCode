let nameShip = prompt('Qual o nome da nave ?');
let newNameShip = '';

for (let i = nameShip.length - 1; i >= 0; i--) {
  if (nameShip[i] == 'e') {
    break
  }
  newNameShip += nameShip[i];
}

alert(newNameShip)