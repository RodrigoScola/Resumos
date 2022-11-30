#include <stdio.h>

int main(void)
{
    int original, n1, n2, n3, n4, n5, n6, n7, verificacao, par, impar, resultado;

    original = 65833254;

    n1 = original / 10000000;
    n2 = (original / 1000000) - n1 * 10;
    n3 = (original / 100000) - ((n1 * 100) + n2 * 10);
    n4 = (original / 10000) - (((n1 * 1000) + n2 * 100) + n3 * 10);
    n5 = (original / 1000) - ((((n1 * 10000) + n2 * 1000) + n3 * 100) + n4 * 10);
    n6 = (original / 100) - (((((n1 * 100000) + n2 * 10000) + n3 * 1000) + n4 * 100) + n5 * 10);
    n7 = (original / 10) - ((((((n1 * 1000000) + n2 * 100000) + n3 * 10000) + n4 * 1000) + n5 * 100) + n6 * 10);
    verificacao = (original / 1) - (((((((n1 * 10000000) + n2 * 1000000) + n3 * 100000) + n4 * 10000) + n5 * 1000) + n6 * 100) + n7 * 10);

    par = n2 + n4 + n6;

    impar = (n1 * 3) + (n3 * 3) + (n5 * 3) + (n7 * 3);

    resultado = (10 - (par + impar) % 10);

    if (resultado == verificacao)
    {
        return printf("correto");
    }
    else
    {
        return printf("incorreto");
    }
}
