function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var tano = window.document.getElementById('txt1')
    var t = Number(tano.value)
    var res = document.querySelector('div#res')
    var subres = document.getElementById('subres')
    
    if(tano.value.length == 0 || t > ano){
        window.alert('[ERRO] Verifique se os dados estão corretos e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - t
        var genero = ''
        
    }if (fsex[0].checked) {
        genero = 'Homem'
        if(idade >= 0 && idade < 10){
            //criança
            subres.style.background = 'url(imagens/homem.png) center center no-repeat'
            subres.style.backgroundSize = 'cover'
        } else if(idade < 21) {
            //Jovem
        } else if (idade < 50) {
            //Adulto
        }else{
            //idoso
        }
    }else if (fsex[1].checked) {
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            //criança
        } else if(idade < 21) {
            //Jovem
        } else if (idade < 50) {
            //Adulto
        }else{
            //idoso
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML= `Detetámos ${genero} com ${idade} anos`
    res.appendChild(subres)
}