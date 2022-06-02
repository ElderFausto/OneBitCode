let nameShips = ['barco', 'navio', 'lancha', 'submarino', 'jetski']

let with6Chars = nameShips.find(element => {return element.length >= 6})

console.log(with6Chars)

// retorna o primeiro elemento que atende ao que está sendo buscado