#include <stdio.h>
int main() {
  int j,n, i, prime = 0;
  int NumArr[10];
  j = 0;
  int bigNum = 0;
  
while (j <= 9){
  prime = 0;
  scanf("%d", &n);
  for (i = 2; i <= n / 2; ++i) {
    if (n % i == 0) {
      prime = 1;
      
    }
  }
  if (prime == 0){
      NumArr[j] = n;
      if (n > bigNum) {
      bigNum = n;
  }
      j++;
if (NumArr[9] != 0) {
printf("%i",bigNum);
break;
}
}
}
}

