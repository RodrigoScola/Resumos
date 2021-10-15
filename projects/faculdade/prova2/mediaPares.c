int main(void) {
  int num, soma = 0, media, par;
  for( int i = 0; i < 20; i++) {
    scanf("%i",&num);
    if (num % 2 == 0) {
      soma += num;
      par++;
    }}
  media = soma / par;

  printf("a media e : %i",media);

  return 0;
}