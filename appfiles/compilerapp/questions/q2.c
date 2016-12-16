#include <stdio.h>
void main(){

  int x = 3;
  int y = 8;

  printf("Before swap:\nx value: %d \ny value: %d\n", x, y);
  // function that prints the memory address of input 
  void swap(int *p1, int *p2){
    int temp = *p2;
    
    *p2 = *p1;
    *p1 = temp;
  }

  swap(&x, &y);
  printf("After swap:\nx value: %d \ny value: %d\n", x, y);
}