function show() {
  let element = document.getElementById('name')
  console.log(element.value)
}



// seleciona todos os elementos com o id 'name' e retorna como lista

function show() {
  let elements = document.getElementByName('name')
  console.log(elements[0].value)
}


// esta pegando todos os inputs de nome phone que tao 
// dentro da div de nome phone

function show() {
  let element = document.querySelectorAll('div#phone input[name="phone"]')
  console.log(element.value)
}

// retorna todos os elementos do tipo input

function show() {
  let elements = document.getElementsByTagName('input')
  console.log(elements)
}