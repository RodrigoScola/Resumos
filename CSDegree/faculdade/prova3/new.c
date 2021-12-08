#include <stdio.h>

int main(void) {
  // contadores 
  int vetorNum[11] = {0};
    for (int num = 1; num < 31; num++) {
      int numero;
      scanf("%i",&numero);
      if (numero <= 10) {
        vetorNum[numero] += 1;
      }
    }
    for (int numero = 1; numero <= 10; numero++) {
      printf("O numero %i foi escrito %i veses. \n",numero,vetorNum[numero] );
    }
  // quantidade de valores 
  int numerosArr[20];
  int somaTotal = 0;
  int somaAtual = 0;
  for(int i = 20; i > 0; i--) {
    int num = i;
    // scanf("%i",&num);
    numerosArr[i] = num;
    somaTotal += num;
  }
  // bubble sort
for (int num = 0; num < 20; num++) {
  int current = numerosArr[num];
  int next = numerosArr[num + 1];
  int buffer  = current;
  if (current < next) {
    next = buffer;
    current = next;
  }
}
int contador = 20;
while (somaAtual <= somaTotal / 2) {
  somaAtual += numerosArr[contador];
  contador--;
}
printf("a soma total e %i\n a soma dos numeros para chegar a metade ou maior e %i \n", somaTotal, somaAtual);
printf("a quantidade minima de elementos para chegar a soma maior ou igual da soma total e: %i", 20 - contador);
}

