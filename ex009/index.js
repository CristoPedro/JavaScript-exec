var idade = 15
console.log('')
console.log(`Você tem ${idade} anos`)
console.log('')
if(idade < 16){
    console.log('Não pode votar')
    console.log('')
}else if( idade < 18 || idade > 65){
        console.log('Voto opcional')
        console.log('')
   }else{
        console.log('')
        console.log('Deve votar obrigatóriamente')
        console.log('')
  }
