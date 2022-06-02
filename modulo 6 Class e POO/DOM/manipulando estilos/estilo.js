function setbluebackground() {
  let element = document.getElementById('style-text')
  element.style.backgroundColor = "blue"
}

function settransparentbackground() {
  document.getElementById('style-text').style.backgroundColor = 'transparent'
}

function setredcolor() {
  let element = document.getElementById('style-text')
  element.classList.add('red-color')
}

function removeredcolor() {
  document.getElementById('style-text').classList.remove('red-color')
}