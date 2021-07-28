#include <stdio.h>
int main() {

int i = 1,scan,j = 4;
float s = 1;
scanf("%d",&scan);
while (i < scan) {
if( i % 2 == 0) {
s += 1/(float)j;
}
else{
s -= 1/(float)j;
}
j+=3;
i++;
}
  printf("%.6f",s);
}