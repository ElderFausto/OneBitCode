let timeOut = setTimeout(() => console.log('ola, bom dia'), 3000)
clearTimeout(timeOut)

let seconds = 0
let interval = setInterval(() => {
  seconds += 2
  console.log(`Contando ate dez -> ${seconds}`)
  if(seconds >= 10) clearInterval(interval)
}, 3000);