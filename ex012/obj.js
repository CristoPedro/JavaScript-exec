let amigo = {nome:'Kenio',
 sexo:'Masc',
  peso:70.5
  , engordar(p=0) {
    console.log('engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`O ${amigo.nome} pesa ${amigo.peso}Kg`)
