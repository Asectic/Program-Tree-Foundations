 #include <stdio.h>
 #include "minunit.h"
 #include "lesson2_ex3.c"
 
 int tests_run = 0;
 
 static char * test_1() {
     printf("Test Case: 1\n");
     struct Student *Allen = new_student("Allen", 9756, 3, "computer science");
     printf("Name: %s\nU_id: %d\nYear: %d\nProgram: %s\n",Allen->name,Allen->u_id,Allen->year,Allen->program);
     mu_assert("error, name not Allen", Allen->name == "Allen");
     mu_assert("error, u_id not 9756", Allen->u_id == 9756);
     mu_assert("error, year not 3", Allen->year == 3);
     mu_assert("error, program not computer science", Allen->program == "computer science");
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
         printf("Tests run: %d\n", tests_run);
     }
     else {
         printf("Tests run: %d\n", tests_run);
         printf("ALL TESTS PASSED\n");
     }
 
     return result != 0;
 }