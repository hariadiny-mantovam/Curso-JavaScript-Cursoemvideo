var idade = 32
console.log(`Você tem ${idade} anos.`)
//Bloco para identificar se a pessoa tem direito a votar
if (idade >= 18){
    console.log('Você já pode votar!')
} else {
    console.log("Você ainda não pode votar!")
}
//Bloco para identificar se a pessoa tem voto facultativo ou obrigatorio
if (idade <= 18  || idade > 65){
    console.log('Seu voto é facultativo!')
} else if (idade >= 18  && idade <= 65){
    console.log('Seu voto é obrigatório!')
}
