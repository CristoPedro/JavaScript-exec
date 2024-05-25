function Calcular() {
   var num = document.getElementById('txtn')
   var res = document.getElementById('res')
   if (num.value == 0) {
        window.alert('Não conseguimos calcular digite um valor e tente de novo')
   }else {
    let n = Number(num.value)

    let c = 1

    while (c <= 12) {
        let it = document.createElement('option')
        it.text = `${n} x ${c} = ${n*c}`
        res.appendChild(it)
        it.value = `res${c}`
        c++
      
    }
   
   }
}