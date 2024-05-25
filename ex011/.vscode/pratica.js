var copo = ['laranja', 'Banana', 'Morango', 'Ananaz' , 'Abacate']
copo.sort()
let veri = copo.indexOf('laranj')
console.log(copo)
if(veri == -1){
    console.log(`A fruta não foi encontrada infelizmente`)
}else{
    console.log(`A fruta foi encontrada na posição ${veri}`)
}
