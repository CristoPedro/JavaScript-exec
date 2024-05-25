function contar() {
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    res = window.document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0 ) {
        res.innerHTML = `Imposivel contar verifique os dados`
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(i < f) {

        for(let c = i; c <= f; c+=p) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
      }else{
        for(let c = i; c >= f; c-=p){
            res.innerHTML += `${c} \u{1F449}`
        }
      }
      res.innerHTML += `\u{1F3C1}`
    }
}