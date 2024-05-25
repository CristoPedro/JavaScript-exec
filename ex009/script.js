
var agora = new Date()
var hora = agora.getHours()
var img = window.document.getElementById('filho')
var p = window.document.getElementById('p')
  
hora =20

p.innerHTML = `Agora São ${hora} hora.`

if(hora >= 6 && hora <= 12){
    p.innerHTML = `Agora São ${hora} hora.`
    document.body.style.background = '#5757e8bc'
    img.style.background = 'url(imagens/1.jpg) center center no-repeat'
    img.style.backgroundSize = 'cover'
}else if (hora >= 13 && hora <= 18) {
    p.innerHTML = `Agora São ${hora} hora.`
    document.body.style.background = '#a5552ae7'
    img.style.background = 'url(imagens/2.jpg) center center no-repeat'
    img.style.backgroundSize = 'cover' 
}else if (hora >= 19 && hora <= 23) {
    p.innerHTML = `Agora São ${hora} hora.`
    document.body.style.background = ' #0a0d1cf0'
    img.style.background = 'url(imagens/noite.jpg) center center no-repeat'
    img.style.backgroundSize = 'cover' 
}else{
    p.innerHTML = `Agora São ${hora} hora.`
    document.body.style.background = '#210d27f0'
    img.style.background = 'url(imagens/madrugada.jpg) center center no-repeat'
    img.style.backgroundSize = 'cover' 
}