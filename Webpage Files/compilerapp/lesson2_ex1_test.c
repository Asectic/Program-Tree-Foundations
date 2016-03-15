 #include <stdio.h>
 #include "minunit.h"
 #include "lesson2_ex1.c"
 
 int tests_run = 0;

 static char * test_1() {
     printf("Test Case:1\n");
 	 int x = 5;
 	 int *result;
 	 result = print_addr(x);
     printf("original variable memory address: %p \nresult of print_addr(): %p\n", &x, result);
     mu_assert("error, matched", &x != result);
     return 0;
 }

 static char * all_tests() {
     mu_run_test(test_1);
     return 0;
 }
 
 int main(int argc, char **argv) {
     char *result = all_tests();
     if (result != 0) {
         printf("%s\n", result);
     }
     else {
         printf("ALL TESTS PASSED\n");
     }
     printf("Tests run: %d\n", tests_run);
 
     return result != 0;
 }