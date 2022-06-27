function nomeFilho() {
  let nome = document.querySelector("input[name='nome']").value
  let nascimento = document.querySelector("input[name='nascimento']").value
  let hora = document.querySelector("input[name='hora']").value
  let pai = document.querySelector("input[name='pai']").value
  let mae = document.querySelector("input[name='mae']").value

  let newListValue = document.createElement("li")
  
  newListValue.innerText = `
    Nome: ${nome}. 
    Nascimento: ${nascimento}.
    Hora: ${hora}.
    Pai: ${pai}.
    Mãe: ${mae}.
    `

  let removeFilho = document.createElement("button")
  removeFilho.type = "button"
  removeFilho.innerText = "Remover"
  removeFilho.setAttribute("onclick", "removeFilho(this)")
  newListValue.appendChild(removeFilho)
  document.getElementById("filho-list").appendChild(newListValue)
}

function removeFilho(button) {
  let liToRemove = button.parentNode
  document.getElementById("filho-list").removeChild(liToRemove)
}