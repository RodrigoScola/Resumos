#include <stdio.h>


int main(void) {
  int num,n1,n2,n3,n4,n5,curr;

  scanf("%i",&num);

  n1 = num / 10000;
  curr = n1 * 10;
  n2 = num / 1000 - curr;
  curr = (curr + n2) * 10;
  n3 = num / 100 - curr;
  curr = (curr + 3) * 10;
  n4 = num / 10 - curr;
  curr = (curr + n4) * 10;
  n5 = num - curr;

  if (n1 == n5 && n2 == n4) {
    printf("O número %i é palíndromo",num);
  } else {
    printf("O número %i não é palíndromo",num);
  }

  return 0;
}