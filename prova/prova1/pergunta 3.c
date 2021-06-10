
#include <stdio.h>

int main(void) {
 int salarioBruto,horastrabalhadas,salarioPorHora,anosTotais,percentual,salarioLiquido;

salarioBruto = horastrabalhadas * salarioPorHora;
percentual = (anosTotais / 3) * 2;
salarioBruto += (salarioBruto * (0.01 * percentual));

if (salarioBruto <= 1434) {
  salarioLiquido = salarioBruto;
}
if (salarioBruto > 1434 && salarioBruto <= 2150) {
  salarioLiquido = salarioBruto - (salarioBruto * 0.075);
}
if (salarioBruto > 2150 && salarioBruto <= 2866) {
  salarioLiquido = salarioBruto - (salarioBruto * 0.15);
}
if (salarioBruto > 2866 && salarioBruto <= 3582) {
  salarioLiquido = salarioBruto - (salarioBruto * 0.2250);
}
if (salarioBruto > 3582) {
  salarioLiquido = salarioBruto - (salarioBruto * 0.2750);
}


printf("%i",salarioLiquido);
}