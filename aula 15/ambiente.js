let num = ['Ana', 'Rosa', 1,5,8,4];
num.push('Gustavo')
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} elementos`);
console.log(`O primeiro valor do vetor é ${num[5]}`)
let pos = num.indexOf('Vilma')
if(pos == -1){
    console.log('Não existe este valor dentro do vetor')
} else {
    console.log(`A posição do elemento é ${pos}`)
    
}


//Com repetição
/*let valores = [8, 7,4,2,9]

console.log(valores)

for(let pos=0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

//Com repetição mais simplificada ARRAY

/*let valores = [12,89,56,78]
valores.sort()
console.log(valores);
let pos = 0;

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/