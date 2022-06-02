let nameShips = ['barco', 'navio', 'lancha', 'submarino', 'jetski']



let upcasedSpaceships = nameShips.map(function(currentNameShip) {
  let upcased = currentNameShip.toUpperCase();
  return upcased;
})

console.log(upcasedSpaceships);

// mapeia todos os elementos passando a condição pedida