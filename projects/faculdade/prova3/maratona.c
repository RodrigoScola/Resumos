#include <stdio.h>

int main(void) {
  int corredores = 400;
  int melhoresSegundos [] = {99999999,99999999};
  int melhorCodigo[] ={0,0};
  int melhoresMinutos[] = {0,0};

  for (int i = 1; i <= corredores; i++) {
    int tempo, minutos,segundos,sexo;

    printf("informe o tempo em segundos do corredor %i: \n",i);
    scanf("%i",&tempo);
    printf("informe o sexo corredor %i: \n",i);
    scanf("%i",&sexo);


    if (sexo == 1 && tempo < melhoresSegundos[0]) {
      melhorCodigo[0] = i;
      melhoresMinutos[0] = tempo / 60;
      melhoresSegundos[0] = tempo % 60;
    }
    else if (sexo == 1 && tempo < melhoresSegundos[1]) {
      melhorCodigo[0] = i;
      melhoresMinutos[0] = tempo / 60;
      melhoresSegundos[0] = tempo % 60;
    }


  }
  printf("o melhor corredor masculino foi de codigo %i e com o tempo de %i minutos e %i segundos\n",melhorCodigo[0],melhoresMinutos[0],melhoresSegundos[0] );
  printf("o melhor corredor feminino foi de codigo %i e com o tempo de %i minutos e %i segundos\n",melhorCodigo[1],melhoresMinutos[1],melhoresSegundos[1] );



  return 0;
}