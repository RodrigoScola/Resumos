#include <stdio.h>

int main (void) {
// pares 
     int par1 = 0, par2 = 0;
     for (int i = 0; i < 10; i++) {
          int num1, num2;
          int media = (num1 + num2) / 2;
          if (par1 < media) {
               par1 = media
          }
          else if (par2 < media) {
               par2 = media;
          }
     }
     print("o par com a maior media e %i\n",par1);
     print("o par com a segunda maior media e %i\n",par2);

// alunos
     int reprovados;

     for(int i = 0; i <10; i++) {
          int faltas;
          float notaFinal;
          scanf("%i", &faltas);
          scanf("%i",&notaFinal);
          if (faltas >= 20 || notaFinal < 6.0) {
               reprovados++;
          }
     }
     printf("a porcentagem de alunos reprovados e %i", reprovados * 10);

     return 0
}