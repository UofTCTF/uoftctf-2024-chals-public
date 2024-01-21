#include <stdlib.h>

#include "nodes.h"

extern void profit();
extern void oops();

struct node level8 = {
    NULL,
    NULL,
    profit,
};

struct node level7 = {
    &level8,
    NULL,
    NULL,
};

struct node level6 = {
    NULL,
    &level7,
    NULL,
};

struct node level5 = {
    NULL,
    &level6,
    NULL,
};

struct node level4 = {
    &level5,
    NULL,
    NULL,
};

struct node level3 = {
    NULL,
    &level4,
    NULL,
};

struct node level2 = {
    &level3,
    NULL,
    NULL,
};

struct node level1 = {
    &level2,
    NULL,
    NULL,
};