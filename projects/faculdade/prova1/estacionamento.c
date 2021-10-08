#include <stdio.h>


int main(void) {
  //estacionamento
  int horaEntrada = 0, horaSaida = 0;
  int pagamento;
  scanf("%i",&horaEntrada);
  scanf("%i",&horaSaida);

  int deltaHoras = horaSaida - horaEntrada;

  if (deltaHoras >= 5) {
    pagamento = (deltaHoras - 5) + 15;
  }else  if (deltaHoras == 3 || deltaHoras == 4) {
    pagamento = 10 + deltaHoras * 2;
  } else  {
    pagamento = 5 * deltaHoras;
  }

  printf("O usuario devera pagar %i",pagamento);
  return 0;
}