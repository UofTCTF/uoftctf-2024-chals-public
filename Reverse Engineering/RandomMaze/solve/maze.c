#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

#include "nodes.h"

// flag: uoft{am4z31ng}

// xor_answers = [46, 35, 23, 34, 98, 94, 86, 65]
// ['2e', '23', '17', '22', '4d', '5e', '56', '41']
char flag[] = {0x4f, 0x4e, 0x23, 0x58, 0x7e, 0x6f, 0x38, 0x26, 0x00};

unsigned int sums[] = {206, 161, 174, 173, 100, 159, 213};

void profit(void) {
    printf("uoftctf{%s}\n", flag);
}

void oops(void) {
    printf("woopsie! got something wrong there!");
    exit(69);
}

bool check_prime(char n) {
    if (n == 1 || n == 0) return false;

    for (int i = 2; i <= n / 2; i++) {
        if (n % i == 0) return false;
    }

    return true;
}

extern struct node level1;

// rllrlrrl
struct node maze = {
    NULL, &level1, NULL,
};

struct node *cur = &maze;
char *path;

void traverse(int i) {
    if (path[i] % 2 == 0) {
        cur = cur->right;
    } else {
        cur = cur->left;
    }
    flag[i] ^= path[i];
    if (i == 0) {
        if (check_prime(flag[i])) return;
        else oops();
    } else if (flag[i] + flag[i-1] != sums[i-1]) {
        oops();
    } else if (cur->hmmmm != NULL) {
        cur->hmmmm();
    }
}

int main(void) {
    printf("can you solve the maze? :3\n");

    unsigned long in;

    printf("choose ur path >> ");

    scanf("%lx", &in);
    printf("running your path! hope this works:\n");

    path = (char *) &in;
    for (int i = 0; i < 8; i++) {
        if (
            path[i] % 4 == 0 || 
            path[i] % 3 == 0 || 
            path[i] > 100 ||
            path[i] < 20
        )
            oops();
        else traverse(i);
    }
}