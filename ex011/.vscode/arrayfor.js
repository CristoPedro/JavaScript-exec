let num = [1, 8, 7, 5, (20)]
num.sort()

/*
console.log('A forma padrão de apresentar o vetor')
console.log(num)
console.log('=====================')
console.log('')

console.log('A forma personalisada é com estrutura de repetição')
console.log('')

for(let i = 0; i < num.length; i++){
    console.log(`O meu vetor na posição [${i}] tem o valor ${num[i]}`)
}

console.log('')
*/


for(let i in num){
    console.log(`O meu vetor na posição [${i}] tem o valor ${num[i]}`)
}