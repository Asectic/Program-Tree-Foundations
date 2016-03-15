 #include <stdio.h>
 #include "minunit.h"
 #include "q2.c"
 
 int tests_run = 0;
 
 static char * test_1() {
     printf("Test Case: 1\n");
     int t1_p1 = 7;
     int t1_p2 = 4;
     printf("X value before: %d, Y value before: %d\n", t1_p1, t1_p2);
     swap(&t1_p1, &t1_p2);
     printf("X value after: %d, Y value after: %d\n", t1_p1, t1_p2);
     mu_assert("error, p1 != 4", t1_p1 == 4);
     return 0;
 }
 
 /*static char * test_bar() {
     mu_assert("error, bar != 5", bar == 5);
     return 0;
 }*/
 
 static char * all_tests() {
     mu_run_test(test_1);
     //mu_run_test(test_bar);
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