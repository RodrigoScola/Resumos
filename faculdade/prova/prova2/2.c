#include <stdio.h>



int main () {
  int numero;
    scanf("%i",&numero);


if (numero % 7 == 0 || (numero - 1) % 7 == 0 ) {
  printf("1");
  return 1;
} else {
  printf("0");
  return 0;
}
}

//versao2

// int main (){
// int numero, i;
// scanf("%i",&numero);
// for (i = 0 ; i <= numero;i++) {
// if (i == numero) {
//   if (numero % 7 == 0) {
//     printf("1");
//     return 1;
//   } else if ((numero - 1) % 7 == 0) {
//     printf("1");
//     return 1;
//   } else {
//     printf("0");
//     return 0;
//   } 
// }
// }
// }
