let distanceInLy = prompt('Digite a distancia em anos luz');

let chosenUnity = prompt('Para qual unidade deseja converter ? \n1- Parsepc\n2- Unidade Astronomica\n 3- KM\n\n Digite o numero da opção desejada.')

let choseUnity
let convertedDistance

switch (chosenUnity) {
  case '1':
    chosenUnity = 'Parsec'
    convertedDistance = distanceInLy * 0.306601
    break
  case '2':
    chosenUnity = 'Unidade Astronômica'
    convertedDistance = distanceInLy * 63241.1
    break
  case '3':
    chosenUnity = 'Quilômetros'
    convertedDistance = distanceInLy * 9.5 * Math.pow(10, 12)
    break
  default:
    chosenUnity = 'Unidade não identificada'
    convertedDistance = 'Conversão fora do escopo'
}

alert(`Distancia em anos luz ${distanceInLy}\n ${chosenUnity} : ${convertedDistance}`)