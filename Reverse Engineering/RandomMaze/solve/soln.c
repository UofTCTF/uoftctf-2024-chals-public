#include <stdio.h>

#define LEFT 1
#define RIGHT 0

int main() {
    int lr[8] = {RIGHT, LEFT, LEFT, RIGHT, LEFT, RIGHT, RIGHT, LEFT};

    char flag[] = "ON#X~o8&"; // encrypted flag
    char ans[] = "am4z31ng";

    for (int i = 0; i < 8; i++) {
        ans[i] ^= flag[i];
    }

    printf("%llx\n", *(unsigned long long *)ans);

    for (int i = 0; i < 8; i++) {
        if (ans[i] & 3 == 0 || ans[i] == (ans[i] / 3) * 3) {
            printf("Character ruled out: %02x\n", ans[i]);
            return 1;
        }
    }

    unsigned char sol[8];

    for (int i = 0; i < 8; i++) {
        int found_char = 0;
        for (unsigned char c = 0x14; c <= 'd' ; c++) {
            if ((c & 3) == 0)
                continue;
            if (c == (c / 3) * 3)
                continue;

            if ((c & 1) == lr[i]) {
                printf("%02x", c);
                sol[i] = c;
                found_char = 1;
                break;
            }
        }

        if (!found_char) {
            printf("No character found for %d\n", i);
            return 1;
        }
    }

    puts("");

    printf("%llx\n", *(unsigned long long *)sol);

    return 0;
}