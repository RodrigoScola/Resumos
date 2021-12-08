#include <stdio.h>

int primos(int numero) {
    for (int i = 2; i < numero; i++)
    {
        if (numero % i == 0 && i != numero)
            return 0;
    }
    return 1;
}

int main(void) {
  int totalNum = 20,media[20],multiplosDeCinco[20], par = 0,primo;
  int mediadepar = 0, totalCinco;
  int j = 0,k = 0,cinco;

  for( int i = 0 ; i < totalNum; i++) {
    int num = 0; 
    scanf("%i",&num);
    if (num % 2 == 0) {
      media[par] += num;
      par++;
    }
    if (primos(num) == 1) {
      primo++;
    }
    if (num % 5 == 0) {
      multiplosDeCinco[i] = num;
      cinco++;
    }
  }
  while(j <= par) {
    mediadepar += media[j];
    j++;
  }
  while(k <= cinco) {
    totalCinco *= multiplosDeCinco[k]
    k++;
  }
  printf("a media dos numeros pares e: \n %i\n a quantidade de numeros primos e %i \n o produto de todos numeros lidos que sao multiplos de 5 sao \n %i",mediadepar,primo,totalCinco);
  return 0;
}