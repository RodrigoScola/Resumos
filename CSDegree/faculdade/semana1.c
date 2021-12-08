#include <stdio.h>
#include<math.h>

int main(void) {
//1
  float area;
  scanf("Escreva o valor de uma aresta do quadrado %f",&area);;
  printf("a area e: %f \n", area * area);

//2
  float valor1 = 0, valor2;
  printf("Escreva um valor \n");
  scanf(" %f",&valor1);
  printf("escreva o segundo valor \n");
  scanf("%f",&valor2);
  printf("O resultado da soma e : %f \n",valor1 + valor2);
//3
  float altura,base;
  scanf("escreva a base %f \n",&base);
  scanf("escreva a altura %f",&altura);
  printf("a area do triangulo e %f",base * altura);
//4
float a,b,c;
  scanf("escreva o primeiro valor %f \n",&a);
  scanf("escreva o segundo valor %f \n",&b);
  scanf("escreva o terceiro valor %f \n",&c);

  float formula = (b * b) - (4 * (a) * c);
  formula = sqrt(formula);
  printf("o resultado 1 e : %f \n", (-b + formula ) /2 * a);
  printf("o resultado 2 e : %f \n", (-b - formula ) /2 * a);

  return 0;
}