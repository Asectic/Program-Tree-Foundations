#include <stdio.h>

int * print_addr(int x){
    int *addr = &x;
    return addr;
}