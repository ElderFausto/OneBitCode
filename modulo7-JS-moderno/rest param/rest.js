function bemVindo(messagem, ...nomes) {
  nomes.forEach(nome => console.log(`${messagem}, ${nome}`)
  );
}

bemVindo('Seja bem vindo', 'elder', 'vitoria', 'filomena')