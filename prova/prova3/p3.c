#include <stdio.h>

int main () {
  int resposta = 0,certa1 = 0, certa2 = 0,certa3 = 0,certa4 = 0,certa5 = 0,certa6 = 0,certa7 = 0,certa8 = 0,certa9 = 0,certa10 = 0;
  int n, i;
  int aluno1 [10] = {}, aluno2 [10] = {}, aluno3 [10] = {}, aluno4 [10] ={},aluno5 [10] ={};
  int corretas1 = 0, corretas2 = 0, corretas3 = 0,corretas4 = 0,corretas5 = 0;


// adicionam as respostas certas 

  scanf("%i",&certa1);
  scanf("%i",&certa2);
  scanf("%i",&certa3);
  scanf("%i",&certa4);
  scanf("%i",&certa5);
  scanf("%i",&certa6);
  scanf("%i",&certa7);
  scanf("%i",&certa8);
  scanf("%i",&certa9);
  scanf("%i",&certa10);

// adicionam as notas dos alunos

for(n = 0; n < 5; n++) {
  if (n == 0) {
    for(int j = 0;j < 10;j++) {
      int resultado = 0;
      scanf("%i",&resultado);
      aluno1[j] = resultado;
    }
  }
  else if (n == 1) {
        for(int j = 0;j < 10;j++) {
      int resultado = 0;
      scanf("%i",&resultado);
      aluno2[j] = resultado;
    }
  }
  else if (n == 2) {
    for(int j = 0;j < 10;j++) {
      int resultado = 0;
      scanf("%i",&resultado);
      aluno3[j] = resultado;
    }
  }
  else if (n == 3) {
    for(int j = 0;j < 10;j++) {
      int resultado = 0;
      scanf("%i",&resultado);
      aluno4[j] = resultado;
    }
  }
  else if (n == 4) {
        for(int j = 0;j < 10;j++) {
      int resultado = 0;
      scanf("%i",&resultado);
      aluno5[j] = resultado;
    }
  }
}

 int respostasCertas [10] = {certa1, certa2,certa3,certa4,certa5,certa6,certa7,certa8,certa9,certa10};

//se a resposta certa eh igual a resposta do aluno, a nota aumenta

  for (int u = 0; u < 5; u++){
    if(u == 0) {
      for(int r = 0; r < 10;r++){
        if (aluno1[r] == certa1) {
          corretas1++;
        }
        else if (aluno1[r] == certa2) {
          corretas1++;
        }
        else if (aluno1[r] == certa3) {
          corretas1++;
        }
        else if (aluno1[r] == certa4) {
          corretas1++;
        }
        else if (aluno1[r] == certa5) {
          corretas1++;
        }
        else if (aluno1[r] == certa6) {
          corretas1++;
        }
        else if (aluno1[r] == certa6) {
          corretas1++;
        }
        else if (aluno1[r] == certa7) {
          corretas1++;
        }
        else if (aluno1[r] == certa8) {
          corretas1++;
        }
        else if (aluno1[r] == certa9) {
          corretas1++;
        }
        else if (aluno1[r] == certa10) {
          corretas1++;
        }
      }
    }
    if(u == 1) {
      for(int r = 0; r < 10;r++){
        if (aluno2[r] == certa1) {
          corretas2++;
        }
        else if (aluno2[r] == certa2) {
          corretas2++;
        }
        else if (aluno2[r] == certa3) {
          corretas2++;
        }
        else if (aluno2[r] == certa4) {
          corretas2++;
        }
        else if (aluno2[r] == certa5) {
          corretas2++;
        }
        else if (aluno2[r] == certa6) {
          corretas2++;
        }
        else if (aluno2[r] == certa6) {
          corretas2++;
        }
        else if (aluno2[r] == certa7) {
          corretas2++;
        }
        else if (aluno2[r] == certa8) {
          corretas2++;
        }
        else if (aluno2[r] == certa9) {
          corretas2++;
        }
        else if (aluno2[r] == certa10) {
          corretas2++;
        }
      }
    }
    
    if(u == 2) {
      for(int r = 0; r < 10;r++){
        if (aluno1[r] == certa1) {
          corretas3++;
        }
        else if (aluno3[r] == certa2) {
          corretas3++;
        }
        else if (aluno3[r] == certa3) {
          corretas3++;
        }
        else if (aluno3[r] == certa4) {
          corretas3++;
        }
        else if (aluno3[r] == certa5) {
          corretas3++;
        }
        else if (aluno3[r] == certa6) {
          corretas3++;
        }
        else if (aluno3[r] == certa6) {
          corretas3++;
        }
        else if (aluno3[r] == certa7) {
          corretas3++;
        }
        else if (aluno3[r] == certa8) {
          corretas3++;
        }
        else if (aluno3[r] == certa9) {
          corretas3++;
        }
        else if (aluno3[r] == certa10) {
          corretas3++;
        }
      }
      
    if(u == 3) {
      for(int r = 0; r < 10;r++){
        if (aluno1[r] == certa1) {
          corretas4++;
        }
        else if (aluno1[r] == certa2) {
          corretas4++;
        }
        else if (aluno4[r] == certa3) {
          corretas4++;
        }
        else if (aluno4[r] == certa4) {
          corretas4++;
        }
        else if (aluno4[r] == certa5) {
          corretas4++;
        }
        else if (aluno4[r] == certa6) {
          corretas4++;
        }
        else if (aluno4[r] == certa6) {
          corretas4++;
        }
        else if (aluno4[r] == certa7) {
          corretas4++;
        }
        else if (aluno4[r] == certa8) {
          corretas4++;
        }
        else if (aluno4[r] == certa9) {
          corretas4++;
        }
        else if (aluno4[r] == certa10) {
          corretas4++;
        }
      }
      
    if(u == 4) {
      for(int r = 0; r < 10;r++){
        if (aluno1[r] == certa1) {
          corretas5++;
        }
        else if (aluno1[r] == certa2) {
          corretas5++;
        }
        else if (aluno1[r] == certa3) {
          corretas5++;
        }
        else if (aluno1[r] == certa4) {
          corretas5++;
        }
        else if (aluno1[r] == certa5) {
          corretas5++;
        }
        else if (aluno1[r] == certa6) {
          corretas5++;
        }
        else if (aluno1[r] == certa6) {
          corretas5++;
        }
        else if (aluno1[r] == certa7) {
          corretas5++;
        }
        else if (aluno1[r] == certa8) {
          corretas5++;
        }
        else if (aluno1[r] == certa9) {
          corretas5++;
        }
        else if (aluno1[r] == certa10) {
          corretas5++;
        }
      }

  }
    }
    }
  }
  printf("%i , %i , %i , %i , %i",corretas1,corretas2,corretas3,corretas4,corretas5);
}







