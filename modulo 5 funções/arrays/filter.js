let nameShips = ['barco', 'navio', 'lancha', 'submarino', 'jetski']

let with6Chars = nameShips.filter(element => {return element.length >= 6})

console.log(with6Chars)

// filtra os elementos segundo a condição passada e retorna todos eles