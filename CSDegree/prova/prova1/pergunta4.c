
#include <stdio.h>

int main(void)
{
    int hi, hf, mi, mf, ht, mt, si, sf, st, resultado, segundos;

    hi = 0;
    hf = 0;
    mi = 0;
    mf = 0;
    si = 0;
    sf = 60;

    ht = (hf - hi) * 3600;
    mt = (mf - mi) * 60;
    st = sf - si;

    if (ht < 0)
    {
        ht = ht * -1;
    }
    if (mt < 0)
    {

        mt = mt * -1;
    }
    resultado = ht + mt + st;

    if (resultado <= 3)
    {
        segundos = 0;
    }
    else if (resultado <= 30)
    {
        segundos = 30;
    }
    else if (resultado > 30)
    {
        segundos = (((resultado - 30) / 6) * 5) + 30;
    }

    printf("%i segundos", segundos);
}