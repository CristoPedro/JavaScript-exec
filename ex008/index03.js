var agora = new Date()
var diaSemana = agora.getDay()

/*
   0 = Domingo
   1 = Segunda
   2 = Terça 
   4 = Quarta
   5 = Sexta
   6 = Sábado 
*/

diaSemana = 1
switch (diaSemana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')    
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')   
        break 
    case 6:
        console.log('Sábado')    
    default:
        console.log('Está opção esta errada verifica e tenta de novo')
        break
}