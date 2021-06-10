function numero(str) {
 let numero = str.toString().split('')
.map((curr,ind) => curr += Math.pow('10',ind))
for(let k in numero) numero[k].replace(numero[k][1],'');
return numero.reverse()
}  

console.log(numero(546))