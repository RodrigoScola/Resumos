#include <stdio.h>


int main(void) {
  int l1,l2,l3,l4,l5;
  int pontosTotais;

  printf("Escreva os valores dos arremessos ao lado, lembrando que os valores devem ser em ordem crescente \n");
  scanf("%i",&l1);
  scanf("%i",&l2);
  scanf("%i",&l3);
  scanf("%i",&l4);
  scanf("%i",&l5);


  if (l1 == l5) {
    pontosTotais = 50;
  }
  
  else if (l1 != l5 && l1 == l4) {
    //4 valores iguais e 1 diferente
    pontosTotais = 30; 
  }
  else if (l1 != l2 && l2 == l5) {
    //4 valores iguais e 1 diferente
    pontosTotais = 30;
  }
  else if (l1 + 1 == l2 && l2 + 1 == l3 && l3 + 1 == l4 && l4 + 1 == l5) {
    //valores formam uma sequencia
    pontosTotais = 20;
  }
  //full hand
  else if (l1 == l3 && l3 != l4 && l4 == l5) {
    //3 primeiros pontos são iguais e os 2 ultimos sao diferentes
    pontosTotais = 10;
  }
  else if (l1 == l2 && l2 != l3 && l3 == l5) {
    // 3 ultimos pontos são iguais e os 2 primeiros sao diferentes
    pontosTotais = 10;
  }
  //nenhumas das alternativas acima
  else {
    pontosTotais = 0;
  }

  

  printf("O resultado é: %i",pontosTotais);
  return 0;
}