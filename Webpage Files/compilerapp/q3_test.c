 #include <stdio.h>
 #include "minunit.h"
 #include "new_student.c"
 
 int tests_run = 0;
 
 static char * test_1() {
     struct Student *Allen = new_student("Allen", 9756, 3, "computer science");
     mu_assert("error, name not correct", Allen->name == "Allen");
     mu_assert("error, u_id not correct", Allen->u_id == 9756);
     mu_assert("error, year not correct", Allen->year == 3);
     mu_assert("error, program not correct", Allen->program == "computer science");
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