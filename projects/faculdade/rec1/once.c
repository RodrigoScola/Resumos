#include <stdio.h>

int main(void) {
     int horaEntrada,horaSaida,minutoEntrada, minutoSaida;

     scanf("%i",&horaEntrada);
     scanf("%i",&horaSaida);
     scanf("%i",&minutoEntrada);
     scanf("%i",&minutoSaida);

     int deltahora = horaSaida - horaEntrada;
     int deltaMinuto = minutoEntrada - minutoSaida;

     if (deltaMinuto > 0) {
          deltahora += 1;
     }
     if (deltahora > 2) {
          deltahora = 30 + (5 * deltahora);
     }
     else if (deltahora == 1 || deltahora == 2) {
          deltahora = 10 + deltahora * 10;
     }
     
     printf("total a pagar e %i", deltahora);     


     return 0;
}