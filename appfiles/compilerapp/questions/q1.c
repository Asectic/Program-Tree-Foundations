#include <stdio.h>
void main(){

  // function that prints the memory address of input 
  void print_addr(int x){
    printf("printf_addr: %d", &x);
  }

  int x = 5;

  // print the memory address of variable x
  printf("printf(): %d \n", &x);
  print_addr(x);
}