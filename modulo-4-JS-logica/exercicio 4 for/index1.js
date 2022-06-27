let nameShip = prompt('Digite o nome da nave: ');
let caracter = prompt('Qual caractere deseja substituir ?');
let newCaracter = prompt('Por qual caractere deseja substituir ?');
let newSpaceship = ''

for (let i = 0; i < nameShip.length; i++) {
  if (nameShip[i] == caracter) {
    newSpaceship += newCaracter;
  } else {
    newSpaceship += nameShip[i];
  }
}

console.log(`O nome da nave é ${newSpaceship}`)
