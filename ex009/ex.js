var agora = new Date()
var hora = agora.getHours
console.log(`São exatamente ${hora} horas`)
if(hora >= 6 && hora <= 12){
    console.log('Bom dia, como estas')
}else if(hora >= 13 && hora <= 18){
    console.log('Boa tarde, como vai')
}else if(hora >= 0 && hora <= 5 ){
    console.log('Esta de madrugada')
}else{
    console.log('Boa noite')
}