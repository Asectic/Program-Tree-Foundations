#include <stdio.h>
#include <stdlib.h>

struct Student {
      char *name;
      int u_id;
      int year;
      char *program;
};

struct Student *new_student(char *name, int u_id, int year, char *program){
  struct Student *new = malloc(sizeof(struct Student));
  new->name = name;
  new->u_id = u_id;
  new->year = year;
  new->program = program;
  return new;
}