let departureDateEntry = prompt("Qual data você quer partir ? (DD/MM/YYYY)");

let departureDate = moment(departureDateEntry, "DD/MM/YYYY");
let today = moment();

let dateDiff = today - departureDate;
let choseOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias.")

if (choseOption == '1') {
  let secondDeparture = Math.round(dateDiff / 1000)
  alert(`Temmpo de voô: ${secondDeparture} segundos`)
} else if (choseOption == '2') {
  let minuteOfDeparture = Math.round(dateDiff / 1000 / 60)
  alert(`Tempo de voô: ${minuteOfDeparture} minutos`)
} else if (choseOption == '3') {
  let hoursOfparture = Math.round(dateDiff / 1000 / 3600)
  alert(`Tempo de voô: ${hoursOfparture} horas`)
} else if (choseOption = '4') {
  let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
  alert(`Tempo de voô: ${daysOfDeparture} dias.`)
} else {
  alert('Opção invalida')
}