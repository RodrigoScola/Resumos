#include <stdio.h>
#include <math.h>

int main(void) {
  float imc,maiorImc,pesoDeMaiorImc,alturadeMaiorImc,peso,menorPeso,altura,maiorAltura;
  int quantidadeDePessoas;

  scanf("%i",&quantidadeDePessoas);

  for (int i = 0; i < quantidadeDePessoas; i++) {
    scanf("%f",&peso);
    scanf("%f",&altura);
    imc = peso / sqrt(altura);

    if (imc > maiorImc) {
      maiorImc = imc;
      pesoDeMaiorImc = peso;
      alturadeMaiorImc = altura;
    }
    if (altura > maiorAltura) {
      maiorAltura = altura;
    }
    if (peso < menorPeso) {
      menorPeso = peso;
    }
  }
  printf("o peso e altura da pessoa de maior imc: %f.2 %f.2\n",pesoDeMaiorImc,alturadeMaiorImc);
  printf("a altura da pessoa mais alta: %f.2\n",maiorAltura);
  printf("peso da pessoa mais leve: %f.2\n",menorPeso);
}