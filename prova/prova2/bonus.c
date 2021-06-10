#include <stdio.h>

int main () {
int min, max,j,m,primo = 0,i;
min= 1;
max = 0;
int primoArr[10];
for (j = 0; j < 10;j++) {
  scanf("%d", &m);
  for (i = 2; i <= m / 2; ++i) {
    if (m % i == 0) {
      primo = 1;
    }
if (primo) {
  if (m > max) {
    max = m;
  } 
  if (m < min) {
    min = m;
  }
}
}
}
  if (j == 10 && primo == 0) {
  printf("-1");
}else  if (j == 10 ) {
printf("%i , %i",min, max);
}
}