let vetor = [1, 5, 8, 3]
vetor.push(2)
vetor.sort()
let x = vetor.indexOf(3)
console.log(vetor )
console.log(`O meu vetor tem ${vetor.length} posições`)
if (x == -1) {
    console.log('O valor não foi encontrado em nenhuma posição de vetor')
}else{
    console.log(`O valor  esta na posição ${x}`)
}



