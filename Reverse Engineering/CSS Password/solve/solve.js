const cssSourceCode = `
        /* LED1 */
        /* b1_7_l1_c1 */
        .wrapper:has(.byte:nth-child(1) .latch:nth-child(7) .latch__reset:active) .checker:nth-of-type(2) .checker__state:nth-child(1) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(1) .latch:nth-child(7) .latch__set:active) .checker:nth-of-type(2) .checker__state:nth-child(1) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b1_8_l1_c2 */
        .wrapper:has(.byte:nth-child(1) .latch:nth-child(8) .latch__reset:active) .checker:nth-of-type(2) .checker__state:nth-child(2) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(1) .latch:nth-child(8) .latch__set:active) .checker:nth-of-type(2) .checker__state:nth-child(2) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b2_7_l1_c3 */
        .wrapper:has(.byte:nth-child(2) .latch:nth-child(7) .latch__reset:active) .checker:nth-of-type(2) .checker__state:nth-child(3) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(2) .latch:nth-child(7) .latch__set:active) .checker:nth-of-type(2) .checker__state:nth-child(3) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b2_8_l1_c4 */
        .wrapper:has(.byte:nth-child(2) .latch:nth-child(8) .latch__reset:active) .checker:nth-of-type(2) .checker__state:nth-child(4) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(2) .latch:nth-child(8) .latch__set:active) .checker:nth-of-type(2) .checker__state:nth-child(4) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b3_7_l1_c5 */
        .wrapper:has(.byte:nth-child(3) .latch:nth-child(7) .latch__reset:active) .checker:nth-of-type(2) .checker__state:nth-child(5) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(3) .latch:nth-child(7) .latch__set:active) .checker:nth-of-type(2) .checker__state:nth-child(5) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b3_8_l1_c6 */
        .wrapper:has(.byte:nth-child(3) .latch:nth-child(8) .latch__reset:active) .checker:nth-of-type(2) .checker__state:nth-child(6) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(3) .latch:nth-child(8) .latch__set:active) .checker:nth-of-type(2) .checker__state:nth-child(6) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b4_7_l1_c7 */
        .wrapper:has(.byte:nth-child(4) .latch:nth-child(7) .latch__reset:active) .checker:nth-of-type(2) .checker__state:nth-child(7) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(4) .latch:nth-child(7) .latch__set:active) .checker:nth-of-type(2) .checker__state:nth-child(7) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b4_8_l1_c8 */
        .wrapper:has(.byte:nth-child(4) .latch:nth-child(8) .latch__reset:active) .checker:nth-of-type(2) .checker__state:nth-child(8) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(4) .latch:nth-child(8) .latch__set:active) .checker:nth-of-type(2) .checker__state:nth-child(8) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b7_7_l1_c9 */
        .wrapper:has(.byte:nth-child(7) .latch:nth-child(7) .latch__reset:active) .checker:nth-of-type(2) .checker__state:nth-child(9) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(7) .latch:nth-child(7) .latch__set:active) .checker:nth-of-type(2) .checker__state:nth-child(9) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b7_8_l1_c10 */
        .wrapper:has(.byte:nth-child(7) .latch:nth-child(8) .latch__reset:active) .checker:nth-of-type(2) .checker__state:nth-child(10) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(7) .latch:nth-child(8) .latch__set:active) .checker:nth-of-type(2) .checker__state:nth-child(10) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b9_7_l1_c11 */
        .wrapper:has(.byte:nth-child(9) .latch:nth-child(7) .latch__reset:active) .checker:nth-of-type(2) .checker__state:nth-child(11) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(9) .latch:nth-child(7) .latch__set:active) .checker:nth-of-type(2) .checker__state:nth-child(11) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b9_8_l1_c12 */
        .wrapper:has(.byte:nth-child(9) .latch:nth-child(8) .latch__reset:active) .checker:nth-of-type(2) .checker__state:nth-child(12) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(9) .latch:nth-child(8) .latch__set:active) .checker:nth-of-type(2) .checker__state:nth-child(12) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b10_7_l1_c13 */
        .wrapper:has(.byte:nth-child(10) .latch:nth-child(7) .latch__reset:active) .checker:nth-of-type(2) .checker__state:nth-child(13) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(10) .latch:nth-child(7) .latch__set:active) .checker:nth-of-type(2) .checker__state:nth-child(13) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b10_8_l1_c14 */
        .wrapper:has(.byte:nth-child(10) .latch:nth-child(8) .latch__reset:active) .checker:nth-of-type(2) .checker__state:nth-child(14) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(10) .latch:nth-child(8) .latch__set:active) .checker:nth-of-type(2) .checker__state:nth-child(14) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b12_7_l1_c15 */
        .wrapper:has(.byte:nth-child(12) .latch:nth-child(7) .latch__reset:active) .checker:nth-of-type(2) .checker__state:nth-child(15) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(12) .latch:nth-child(7) .latch__set:active) .checker:nth-of-type(2) .checker__state:nth-child(15) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b12_8_l1_c16 */
        .wrapper:has(.byte:nth-child(12) .latch:nth-child(8) .latch__reset:active) .checker:nth-of-type(2) .checker__state:nth-child(16) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(12) .latch:nth-child(8) .latch__set:active) .checker:nth-of-type(2) .checker__state:nth-child(16) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b13_7_l1_c17 */
        .wrapper:has(.byte:nth-child(13) .latch:nth-child(7) .latch__reset:active) .checker:nth-of-type(2) .checker__state:nth-child(17) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(13) .latch:nth-child(7) .latch__set:active) .checker:nth-of-type(2) .checker__state:nth-child(17) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b13_8_l1_c18 */
        .wrapper:has(.byte:nth-child(13) .latch:nth-child(8) .latch__reset:active) .checker:nth-of-type(2) .checker__state:nth-child(18) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(13) .latch:nth-child(8) .latch__set:active) .checker:nth-of-type(2) .checker__state:nth-child(18) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b17_7_l1_c19 */
        .wrapper:has(.byte:nth-child(17) .latch:nth-child(7) .latch__reset:active) .checker:nth-of-type(2) .checker__state:nth-child(19) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(17) .latch:nth-child(7) .latch__set:active) .checker:nth-of-type(2) .checker__state:nth-child(19) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b17_8_l1_c20 */
        .wrapper:has(.byte:nth-child(17) .latch:nth-child(8) .latch__reset:active) .checker:nth-of-type(2) .checker__state:nth-child(20) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(17) .latch:nth-child(8) .latch__set:active) .checker:nth-of-type(2) .checker__state:nth-child(20) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b18_7_l1_c21 */
        .wrapper:has(.byte:nth-child(18) .latch:nth-child(7) .latch__reset:active) .checker:nth-of-type(2) .checker__state:nth-child(21) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(18) .latch:nth-child(7) .latch__set:active) .checker:nth-of-type(2) .checker__state:nth-child(21) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b18_8_l1_c22 */
        .wrapper:has(.byte:nth-child(18) .latch:nth-child(8) .latch__reset:active) .checker:nth-of-type(2) .checker__state:nth-child(22) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(18) .latch:nth-child(8) .latch__set:active) .checker:nth-of-type(2) .checker__state:nth-child(22) {
            transform: translateX(-100%);
            transition: transform 0s;
        }


        /* LED2 */
        /* b1_1_l2_c1 */
        .wrapper:has(.byte:nth-child(1) .latch:nth-child(1) .latch__reset:active) .checker:nth-of-type(3) .checker__state:nth-child(1) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(1) .latch:nth-child(1) .latch__set:active) .checker:nth-of-type(3) .checker__state:nth-child(1) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b2_1_l2_c2 */
        .wrapper:has(.byte:nth-child(2) .latch:nth-child(1) .latch__reset:active) .checker:nth-of-type(3) .checker__state:nth-child(2) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(2) .latch:nth-child(1) .latch__set:active) .checker:nth-of-type(3) .checker__state:nth-child(2) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b3_1_l2_c3 */
        .wrapper:has(.byte:nth-child(3) .latch:nth-child(1) .latch__reset:active) .checker:nth-of-type(3) .checker__state:nth-child(3) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(3) .latch:nth-child(1) .latch__set:active) .checker:nth-of-type(3) .checker__state:nth-child(3) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b4_1_l2_c4 */
        .wrapper:has(.byte:nth-child(4) .latch:nth-child(1) .latch__reset:active) .checker:nth-of-type(3) .checker__state:nth-child(4) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(4) .latch:nth-child(1) .latch__set:active) .checker:nth-of-type(3) .checker__state:nth-child(4) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b5_1_l2_c5 */
        .wrapper:has(.byte:nth-child(5) .latch:nth-child(1) .latch__reset:active) .checker:nth-of-type(3) .checker__state:nth-child(5) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(5) .latch:nth-child(1) .latch__set:active) .checker:nth-of-type(3) .checker__state:nth-child(5) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b6_1_l2_c6 */
        .wrapper:has(.byte:nth-child(6) .latch:nth-child(1) .latch__reset:active) .checker:nth-of-type(3) .checker__state:nth-child(6) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(6) .latch:nth-child(1) .latch__set:active) .checker:nth-of-type(3) .checker__state:nth-child(6) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b7_1_l2_c7 */
        .wrapper:has(.byte:nth-child(7) .latch:nth-child(1) .latch__reset:active) .checker:nth-of-type(3) .checker__state:nth-child(7) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(7) .latch:nth-child(1) .latch__set:active) .checker:nth-of-type(3) .checker__state:nth-child(7) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b8_1_l2_c8 */
        .wrapper:has(.byte:nth-child(8) .latch:nth-child(1) .latch__reset:active) .checker:nth-of-type(3) .checker__state:nth-child(8) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(8) .latch:nth-child(1) .latch__set:active) .checker:nth-of-type(3) .checker__state:nth-child(8) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b9_1_l2_c9 */
        .wrapper:has(.byte:nth-child(9) .latch:nth-child(1) .latch__reset:active) .checker:nth-of-type(3) .checker__state:nth-child(9) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(9) .latch:nth-child(1) .latch__set:active) .checker:nth-of-type(3) .checker__state:nth-child(9) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b10_1_l2_c10 */
        .wrapper:has(.byte:nth-child(10) .latch:nth-child(1) .latch__reset:active) .checker:nth-of-type(3) .checker__state:nth-child(10) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(10) .latch:nth-child(1) .latch__set:active) .checker:nth-of-type(3) .checker__state:nth-child(10) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b11_1_l2_c11 */
        .wrapper:has(.byte:nth-child(11) .latch:nth-child(1) .latch__reset:active) .checker:nth-of-type(3) .checker__state:nth-child(11) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(11) .latch:nth-child(1) .latch__set:active) .checker:nth-of-type(3) .checker__state:nth-child(11) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b12_1_l2_c12 */
        .wrapper:has(.byte:nth-child(12) .latch:nth-child(1) .latch__reset:active) .checker:nth-of-type(3) .checker__state:nth-child(12) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(12) .latch:nth-child(1) .latch__set:active) .checker:nth-of-type(3) .checker__state:nth-child(12) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b13_1_l2_c13 */
        .wrapper:has(.byte:nth-child(13) .latch:nth-child(1) .latch__reset:active) .checker:nth-of-type(3) .checker__state:nth-child(13) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(13) .latch:nth-child(1) .latch__set:active) .checker:nth-of-type(3) .checker__state:nth-child(13) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b14_1_l2_c14 */
        .wrapper:has(.byte:nth-child(14) .latch:nth-child(1) .latch__reset:active) .checker:nth-of-type(3) .checker__state:nth-child(14) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(14) .latch:nth-child(1) .latch__set:active) .checker:nth-of-type(3) .checker__state:nth-child(14) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b15_1_l2_c15 */
        .wrapper:has(.byte:nth-child(15) .latch:nth-child(1) .latch__reset:active) .checker:nth-of-type(3) .checker__state:nth-child(15) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(15) .latch:nth-child(1) .latch__set:active) .checker:nth-of-type(3) .checker__state:nth-child(15) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b16_1_l2_c16 */
        .wrapper:has(.byte:nth-child(16) .latch:nth-child(1) .latch__reset:active) .checker:nth-of-type(3) .checker__state:nth-child(16) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(16) .latch:nth-child(1) .latch__set:active) .checker:nth-of-type(3) .checker__state:nth-child(16) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b17_1_l2_c17 */
        .wrapper:has(.byte:nth-child(17) .latch:nth-child(1) .latch__reset:active) .checker:nth-of-type(3) .checker__state:nth-child(17) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(17) .latch:nth-child(1) .latch__set:active) .checker:nth-of-type(3) .checker__state:nth-child(17) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b18_1_l2_c18 */
        .wrapper:has(.byte:nth-child(18) .latch:nth-child(1) .latch__reset:active) .checker:nth-of-type(3) .checker__state:nth-child(18) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(18) .latch:nth-child(1) .latch__set:active) .checker:nth-of-type(3) .checker__state:nth-child(18) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b19_1_l2_c19 */
        .wrapper:has(.byte:nth-child(19) .latch:nth-child(1) .latch__reset:active) .checker:nth-of-type(3) .checker__state:nth-child(19) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(19) .latch:nth-child(1) .latch__set:active) .checker:nth-of-type(3) .checker__state:nth-child(19) {
            transform: translateX(0%);
            transition: transform 0s;
        }


        /* LED3 */
        /* b8_7_l3_c1 */
        .wrapper:has(.byte:nth-child(8) .latch:nth-child(7) .latch__reset:active) .checker:nth-of-type(4) .checker__state:nth-child(1) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(8) .latch:nth-child(7) .latch__set:active) .checker:nth-of-type(4) .checker__state:nth-child(1) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b8_8_l3_c2 */
        .wrapper:has(.byte:nth-child(8) .latch:nth-child(8) .latch__reset:active) .checker:nth-of-type(4) .checker__state:nth-child(2) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(8) .latch:nth-child(8) .latch__set:active) .checker:nth-of-type(4) .checker__state:nth-child(2) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b11_7_l3_c3 */
        .wrapper:has(.byte:nth-child(11) .latch:nth-child(7) .latch__reset:active) .checker:nth-of-type(4) .checker__state:nth-child(3) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(11) .latch:nth-child(7) .latch__set:active) .checker:nth-of-type(4) .checker__state:nth-child(3) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b11_8_l3_c4 */
        .wrapper:has(.byte:nth-child(11) .latch:nth-child(8) .latch__reset:active) .checker:nth-of-type(4) .checker__state:nth-child(4) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(11) .latch:nth-child(8) .latch__set:active) .checker:nth-of-type(4) .checker__state:nth-child(4) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b15_7_l3_c5 */
        .wrapper:has(.byte:nth-child(15) .latch:nth-child(7) .latch__reset:active) .checker:nth-of-type(4) .checker__state:nth-child(5) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(15) .latch:nth-child(7) .latch__set:active) .checker:nth-of-type(4) .checker__state:nth-child(5) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b15_8_l3_c6 */
        .wrapper:has(.byte:nth-child(15) .latch:nth-child(8) .latch__reset:active) .checker:nth-of-type(4) .checker__state:nth-child(6) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(15) .latch:nth-child(8) .latch__set:active) .checker:nth-of-type(4) .checker__state:nth-child(6) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b14_7_l3_c7 */
        .wrapper:has(.byte:nth-child(14) .latch:nth-child(7) .latch__reset:active) .checker:nth-of-type(4) .checker__state:nth-child(7) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(14) .latch:nth-child(7) .latch__set:active) .checker:nth-of-type(4) .checker__state:nth-child(7) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b14_8_l3_c8 */
        .wrapper:has(.byte:nth-child(14) .latch:nth-child(8) .latch__reset:active) .checker:nth-of-type(4) .checker__state:nth-child(8) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(14) .latch:nth-child(8) .latch__set:active) .checker:nth-of-type(4) .checker__state:nth-child(8) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b16_7_l3_c9 */
        .wrapper:has(.byte:nth-child(16) .latch:nth-child(7) .latch__reset:active) .checker:nth-of-type(4) .checker__state:nth-child(9) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(16) .latch:nth-child(7) .latch__set:active) .checker:nth-of-type(4) .checker__state:nth-child(9) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b16_8_l3_c10 */
        .wrapper:has(.byte:nth-child(16) .latch:nth-child(8) .latch__reset:active) .checker:nth-of-type(4) .checker__state:nth-child(10) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(16) .latch:nth-child(8) .latch__set:active) .checker:nth-of-type(4) .checker__state:nth-child(10) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* LED4 */
        /* b5_7_l4_c1 */
        .wrapper:has(.byte:nth-child(5) .latch:nth-child(7) .latch__reset:active) .checker:nth-of-type(5) .checker__state:nth-child(1) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(5) .latch:nth-child(7) .latch__set:active) .checker:nth-of-type(5) .checker__state:nth-child(1) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b5_8_l4_c2 */
        .wrapper:has(.byte:nth-child(5) .latch:nth-child(8) .latch__reset:active) .checker:nth-of-type(5) .checker__state:nth-child(2) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(5) .latch:nth-child(8) .latch__set:active) .checker:nth-of-type(5) .checker__state:nth-child(2) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b6_7_l4_c3 */
        .wrapper:has(.byte:nth-child(6) .latch:nth-child(7) .latch__reset:active) .checker:nth-of-type(5) .checker__state:nth-child(3) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(6) .latch:nth-child(7) .latch__set:active) .checker:nth-of-type(5) .checker__state:nth-child(3) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b6_8_l4_c4 */
        .wrapper:has(.byte:nth-child(6) .latch:nth-child(8) .latch__reset:active) .checker:nth-of-type(5) .checker__state:nth-child(4) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(6) .latch:nth-child(8) .latch__set:active) .checker:nth-of-type(5) .checker__state:nth-child(4) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b19_7_l4_c5 */
        .wrapper:has(.byte:nth-child(19) .latch:nth-child(7) .latch__reset:active) .checker:nth-of-type(5) .checker__state:nth-child(5) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(19) .latch:nth-child(7) .latch__set:active) .checker:nth-of-type(5) .checker__state:nth-child(5) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b19_8_l4_c6 */
        .wrapper:has(.byte:nth-child(19) .latch:nth-child(8) .latch__reset:active) .checker:nth-of-type(5) .checker__state:nth-child(6) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(19) .latch:nth-child(8) .latch__set:active) .checker:nth-of-type(5) .checker__state:nth-child(6) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* LED5 */
        /* b1_2_l5_c1 */
        .wrapper:has(.byte:nth-child(1) .latch:nth-child(2) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(1) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(1) .latch:nth-child(2) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(1) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b1_3_l5_c2 */
        .wrapper:has(.byte:nth-child(1) .latch:nth-child(3) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(2) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(1) .latch:nth-child(3) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(2) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b1_4_l5_c3 */
        .wrapper:has(.byte:nth-child(1) .latch:nth-child(4) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(3) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(1) .latch:nth-child(4) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(3) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b1_5_l5_c4 */
        .wrapper:has(.byte:nth-child(1) .latch:nth-child(5) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(4) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(1) .latch:nth-child(5) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(4) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b1_6_l5_c5 */
        .wrapper:has(.byte:nth-child(1) .latch:nth-child(6) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(5) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(1) .latch:nth-child(6) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(5) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b2_2_l5_c6 */
        .wrapper:has(.byte:nth-child(2) .latch:nth-child(2) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(6) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(2) .latch:nth-child(2) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(6) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b2_3_l5_c7 */
        .wrapper:has(.byte:nth-child(2) .latch:nth-child(3) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(7) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(2) .latch:nth-child(3) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(7) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b2_4_l5_c8 */
        .wrapper:has(.byte:nth-child(2) .latch:nth-child(4) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(8) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(2) .latch:nth-child(4) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(8) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b2_5_l5_c9 */
        .wrapper:has(.byte:nth-child(2) .latch:nth-child(5) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(9) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(2) .latch:nth-child(5) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(9) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b2_6_l5_c10 */
        .wrapper:has(.byte:nth-child(2) .latch:nth-child(6) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(10) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(2) .latch:nth-child(6) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(10) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b3_2_l5_c11 */
        .wrapper:has(.byte:nth-child(3) .latch:nth-child(2) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(11) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(3) .latch:nth-child(2) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(11) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b3_3_l5_c12 */
        .wrapper:has(.byte:nth-child(3) .latch:nth-child(3) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(12) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(3) .latch:nth-child(3) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(12) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b3_4_l5_c13 */
        .wrapper:has(.byte:nth-child(3) .latch:nth-child(4) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(13) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(3) .latch:nth-child(4) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(13) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b3_5_l5_c14 */
        .wrapper:has(.byte:nth-child(3) .latch:nth-child(5) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(14) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(3) .latch:nth-child(5) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(14) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b3_6_l5_c15 */
        .wrapper:has(.byte:nth-child(3) .latch:nth-child(6) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(15) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(3) .latch:nth-child(6) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(15) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b4_2_l5_c16 */
        .wrapper:has(.byte:nth-child(4) .latch:nth-child(2) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(16) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(4) .latch:nth-child(2) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(16) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b4_3_l5_c17 */
        .wrapper:has(.byte:nth-child(4) .latch:nth-child(3) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(17) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(4) .latch:nth-child(3) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(17) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b4_4_l5_c18 */
        .wrapper:has(.byte:nth-child(4) .latch:nth-child(4) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(18) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(4) .latch:nth-child(4) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(18) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b4_5_l5_c19 */
        .wrapper:has(.byte:nth-child(4) .latch:nth-child(5) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(19) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(4) .latch:nth-child(5) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(19) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b4_6_l5_c20 */
        .wrapper:has(.byte:nth-child(4) .latch:nth-child(6) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(20) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(4) .latch:nth-child(6) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(20) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b5_2_l5_c21 */
        .wrapper:has(.byte:nth-child(5) .latch:nth-child(2) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(21) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(5) .latch:nth-child(2) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(21) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b5_3_l5_c22 */
        .wrapper:has(.byte:nth-child(5) .latch:nth-child(3) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(22) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(5) .latch:nth-child(3) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(22) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b5_4_l5_c23 */
        .wrapper:has(.byte:nth-child(5) .latch:nth-child(4) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(23) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(5) .latch:nth-child(4) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(23) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b5_5_l5_c24 */
        .wrapper:has(.byte:nth-child(5) .latch:nth-child(5) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(24) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(5) .latch:nth-child(5) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(24) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b5_6_l5_c25 */
        .wrapper:has(.byte:nth-child(5) .latch:nth-child(6) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(25) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(5) .latch:nth-child(6) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(25) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b6_2_l5_c26 */
        .wrapper:has(.byte:nth-child(6) .latch:nth-child(2) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(26) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(6) .latch:nth-child(2) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(26) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b6_3_l5_c27 */
        .wrapper:has(.byte:nth-child(6) .latch:nth-child(3) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(27) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(6) .latch:nth-child(3) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(27) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b6_4_l5_c28 */
        .wrapper:has(.byte:nth-child(6) .latch:nth-child(4) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(28) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(6) .latch:nth-child(4) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(28) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b6_5_l5_c29 */
        .wrapper:has(.byte:nth-child(6) .latch:nth-child(5) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(29) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(6) .latch:nth-child(5) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(29) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b6_6_l5_c30 */
        .wrapper:has(.byte:nth-child(6) .latch:nth-child(6) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(30) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(6) .latch:nth-child(6) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(30) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b7_2_l5_c31 */
        .wrapper:has(.byte:nth-child(7) .latch:nth-child(2) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(31) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(7) .latch:nth-child(2) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(31) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b7_3_l5_c32 */
        .wrapper:has(.byte:nth-child(7) .latch:nth-child(3) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(32) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(7) .latch:nth-child(3) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(32) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b7_4_l5_c33 */
        .wrapper:has(.byte:nth-child(7) .latch:nth-child(4) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(33) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(7) .latch:nth-child(4) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(33) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b7_5_l5_c34 */
        .wrapper:has(.byte:nth-child(7) .latch:nth-child(5) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(34) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(7) .latch:nth-child(5) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(34) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b7_6_l5_c35 */
        .wrapper:has(.byte:nth-child(7) .latch:nth-child(6) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(35) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(7) .latch:nth-child(6) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(35) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b8_2_l5_c36 */
        .wrapper:has(.byte:nth-child(8) .latch:nth-child(2) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(36) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(8) .latch:nth-child(2) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(36) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b8_3_l5_c37 */
        .wrapper:has(.byte:nth-child(8) .latch:nth-child(3) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(37) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(8) .latch:nth-child(3) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(37) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b8_4_l5_c38 */
        .wrapper:has(.byte:nth-child(8) .latch:nth-child(4) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(38) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(8) .latch:nth-child(4) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(38) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b8_5_l5_c39 */
        .wrapper:has(.byte:nth-child(8) .latch:nth-child(5) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(39) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(8) .latch:nth-child(5) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(39) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b8_6_l5_c40 */
        .wrapper:has(.byte:nth-child(8) .latch:nth-child(6) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(40) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(8) .latch:nth-child(6) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(40) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b9_2_l5_c41 */
        .wrapper:has(.byte:nth-child(9) .latch:nth-child(2) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(41) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(9) .latch:nth-child(2) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(41) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b9_3_l5_c42 */
        .wrapper:has(.byte:nth-child(9) .latch:nth-child(3) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(42) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(9) .latch:nth-child(3) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(42) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b9_4_l5_c43 */
        .wrapper:has(.byte:nth-child(9) .latch:nth-child(4) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(43) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(9) .latch:nth-child(4) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(43) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b9_5_l5_c44 */
        .wrapper:has(.byte:nth-child(9) .latch:nth-child(5) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(44) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(9) .latch:nth-child(5) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(44) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b9_6_l5_c45 */
        .wrapper:has(.byte:nth-child(9) .latch:nth-child(6) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(45) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(9) .latch:nth-child(6) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(45) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b10_2_l5_c46 */
        .wrapper:has(.byte:nth-child(10) .latch:nth-child(2) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(46) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(10) .latch:nth-child(2) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(46) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b10_3_l5_c47 */
        .wrapper:has(.byte:nth-child(10) .latch:nth-child(3) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(47) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(10) .latch:nth-child(3) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(47) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b10_4_l5_c48 */
        .wrapper:has(.byte:nth-child(10) .latch:nth-child(4) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(48) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(10) .latch:nth-child(4) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(48) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b10_5_l5_c49 */
        .wrapper:has(.byte:nth-child(10) .latch:nth-child(5) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(49) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(10) .latch:nth-child(5) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(49) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b10_6_l5_c50 */
        .wrapper:has(.byte:nth-child(10) .latch:nth-child(6) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(50) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(10) .latch:nth-child(6) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(50) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b11_2_l5_c51 */
        .wrapper:has(.byte:nth-child(11) .latch:nth-child(2) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(51) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(11) .latch:nth-child(2) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(51) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b11_3_l5_c52 */
        .wrapper:has(.byte:nth-child(11) .latch:nth-child(3) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(52) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(11) .latch:nth-child(3) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(52) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b11_4_l5_c53 */
        .wrapper:has(.byte:nth-child(11) .latch:nth-child(4) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(53) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(11) .latch:nth-child(4) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(53) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b11_5_l5_c54 */
        .wrapper:has(.byte:nth-child(11) .latch:nth-child(5) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(54) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(11) .latch:nth-child(5) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(54) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b11_6_l5_c55 */
        .wrapper:has(.byte:nth-child(11) .latch:nth-child(6) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(55) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(11) .latch:nth-child(6) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(55) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b12_2_l5_c56 */
        .wrapper:has(.byte:nth-child(12) .latch:nth-child(2) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(56) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(12) .latch:nth-child(2) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(56) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b12_3_l5_c57 */
        .wrapper:has(.byte:nth-child(12) .latch:nth-child(3) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(57) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(12) .latch:nth-child(3) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(57) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b12_4_l5_c58 */
        .wrapper:has(.byte:nth-child(12) .latch:nth-child(4) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(58) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(12) .latch:nth-child(4) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(58) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b12_5_l5_c59 */
        .wrapper:has(.byte:nth-child(12) .latch:nth-child(5) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(59) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(12) .latch:nth-child(5) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(59) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b12_6_l5_c60 */
        .wrapper:has(.byte:nth-child(12) .latch:nth-child(6) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(60) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(12) .latch:nth-child(6) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(60) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b13_2_l5_c61 */
        .wrapper:has(.byte:nth-child(13) .latch:nth-child(2) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(61) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(13) .latch:nth-child(2) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(61) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b13_3_l5_c62 */
        .wrapper:has(.byte:nth-child(13) .latch:nth-child(3) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(62) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(13) .latch:nth-child(3) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(62) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b13_4_l5_c63 */
        .wrapper:has(.byte:nth-child(13) .latch:nth-child(4) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(63) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(13) .latch:nth-child(4) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(63) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b13_5_l5_c64 */
        .wrapper:has(.byte:nth-child(13) .latch:nth-child(5) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(64) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(13) .latch:nth-child(5) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(64) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b13_6_l5_c65 */
        .wrapper:has(.byte:nth-child(13) .latch:nth-child(6) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(65) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(13) .latch:nth-child(6) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(65) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b14_2_l5_c66 */
        .wrapper:has(.byte:nth-child(14) .latch:nth-child(2) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(66) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(14) .latch:nth-child(2) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(66) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b14_3_l5_c67 */
        .wrapper:has(.byte:nth-child(14) .latch:nth-child(3) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(67) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(14) .latch:nth-child(3) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(67) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b14_4_l5_c68 */
        .wrapper:has(.byte:nth-child(14) .latch:nth-child(4) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(68) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(14) .latch:nth-child(4) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(68) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b14_5_l5_c69 */
        .wrapper:has(.byte:nth-child(14) .latch:nth-child(5) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(69) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(14) .latch:nth-child(5) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(69) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b14_6_l5_c70 */
        .wrapper:has(.byte:nth-child(14) .latch:nth-child(6) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(70) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(14) .latch:nth-child(6) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(70) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b15_2_l5_c71 */
        .wrapper:has(.byte:nth-child(15) .latch:nth-child(2) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(71) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(15) .latch:nth-child(2) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(71) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b15_3_l5_c72 */
        .wrapper:has(.byte:nth-child(15) .latch:nth-child(3) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(72) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(15) .latch:nth-child(3) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(72) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b15_4_l5_c73 */
        .wrapper:has(.byte:nth-child(15) .latch:nth-child(4) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(73) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(15) .latch:nth-child(4) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(73) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b15_5_l5_c74 */
        .wrapper:has(.byte:nth-child(15) .latch:nth-child(5) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(74) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(15) .latch:nth-child(5) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(74) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b15_6_l5_c75 */
        .wrapper:has(.byte:nth-child(15) .latch:nth-child(6) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(75) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(15) .latch:nth-child(6) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(75) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b16_2_l5_c76 */
        .wrapper:has(.byte:nth-child(16) .latch:nth-child(2) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(76) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(16) .latch:nth-child(2) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(76) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b16_3_l5_c77 */
        .wrapper:has(.byte:nth-child(16) .latch:nth-child(3) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(77) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(16) .latch:nth-child(3) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(77) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b16_4_l5_c78 */
        .wrapper:has(.byte:nth-child(16) .latch:nth-child(4) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(78) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(16) .latch:nth-child(4) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(78) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b16_5_l5_c79 */
        .wrapper:has(.byte:nth-child(16) .latch:nth-child(5) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(79) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(16) .latch:nth-child(5) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(79) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b16_6_l5_c80 */
        .wrapper:has(.byte:nth-child(16) .latch:nth-child(6) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(80) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(16) .latch:nth-child(6) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(80) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b17_2_l5_c81 */
        .wrapper:has(.byte:nth-child(17) .latch:nth-child(2) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(81) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(17) .latch:nth-child(2) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(81) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b17_3_l5_c82 */
        .wrapper:has(.byte:nth-child(17) .latch:nth-child(3) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(82) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(17) .latch:nth-child(3) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(82) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b17_4_l5_c83 */
        .wrapper:has(.byte:nth-child(17) .latch:nth-child(4) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(83) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(17) .latch:nth-child(4) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(83) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b17_5_l5_c84 */
        .wrapper:has(.byte:nth-child(17) .latch:nth-child(5) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(84) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(17) .latch:nth-child(5) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(84) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b17_6_l5_c85 */
        .wrapper:has(.byte:nth-child(17) .latch:nth-child(6) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(85) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(17) .latch:nth-child(6) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(85) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b18_2_l5_c86 */
        .wrapper:has(.byte:nth-child(18) .latch:nth-child(2) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(86) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(18) .latch:nth-child(2) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(86) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b18_3_l5_c87 */
        .wrapper:has(.byte:nth-child(18) .latch:nth-child(3) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(87) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(18) .latch:nth-child(3) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(87) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b18_4_l5_c88 */
        .wrapper:has(.byte:nth-child(18) .latch:nth-child(4) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(88) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(18) .latch:nth-child(4) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(88) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b18_5_l5_c89 */
        .wrapper:has(.byte:nth-child(18) .latch:nth-child(5) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(89) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(18) .latch:nth-child(5) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(89) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b18_6_l5_c90 */
        .wrapper:has(.byte:nth-child(18) .latch:nth-child(6) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(90) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(18) .latch:nth-child(6) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(90) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b19_2_l5_c91 */
        .wrapper:has(.byte:nth-child(19) .latch:nth-child(2) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(91) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(19) .latch:nth-child(2) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(91) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b19_3_l5_c92 */
        .wrapper:has(.byte:nth-child(19) .latch:nth-child(3) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(92) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(19) .latch:nth-child(3) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(92) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b19_4_l5_c93 */
        .wrapper:has(.byte:nth-child(19) .latch:nth-child(4) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(93) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(19) .latch:nth-child(4) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(93) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        /* b19_5_l5_c94 */
        .wrapper:has(.byte:nth-child(19) .latch:nth-child(5) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(94) {
            transform: translateX(0%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(19) .latch:nth-child(5) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(94) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        /* b19_6_l5_c95 */
        .wrapper:has(.byte:nth-child(19) .latch:nth-child(6) .latch__reset:active) .checker:nth-of-type(6) .checker__state:nth-child(95) {
            transform: translateX(-100%);
            transition: transform 0s;
        }

        .wrapper:has(.byte:nth-child(19) .latch:nth-child(6) .latch__set:active) .checker:nth-of-type(6) .checker__state:nth-child(95) {
            transform: translateX(0%);
            transition: transform 0s;
        }
`


const regex = /\.wrapper:has\(\.byte:nth-child\((\d+)\) \.latch:nth-child\((\d+)\) \.latch__reset:active\) \.checker:nth-of-type\((\d+)\) \.checker__state:nth-child\((\d+)\) {\s+transform:\ translateX\((-100%|0%)\);/g

const matches = cssSourceCode.matchAll(regex);
const bytes = Array(19).fill(0).map(a => Array(8).fill(0));

while (!(match = matches.next()).done) {
    // Extract out the byte, bit, and led from the regex
    const [_, byte, bit, led, __, value] = match.value;

    if (value === "-100%") {
        bytes[byte - 1][bit - 1] = 0;
    }
    else if (value === "0%") {
        bytes[byte - 1][bit - 1] = 1;
    }
    else {
        throw new Error("Invalid")
    }
}

console.log(bytes.map(s => s.join("")));
console.log(String.fromCharCode(...bytes.map(s => s.join("")).map(s => Number("0b"+s))));