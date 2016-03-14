#include <stdio.h>
#include <stdlib.h>
void main(){

  struct Student {
      char *name;
      int u_id;
      int year;
      char *program;
  };

  //a function that creates a Student
  struct Student *new_student(char *name, int u_id, int year, char *program){
    struct Student *new = malloc(sizeof(struct Student));
    new->name = name;
    new->u_id = u_id;
    new->year = year;
    new->program = program;
    return new;
  } 

  struct Student *et = new_student("et", 9999, 3, "cs");

  printf("%s\n",et->name);

}