// This code solves the challenge from the decompiled code

import java.nio.charset.StandardCharsets;
import java.util.*;

public class Solution {
    // This function is from decompiled source, no modifications needed apart from adding constants
    public static String b(String paramString) {
        long[] b = new long[11];
        b[0] = 2125394059L;
        b[1] = 316324253L;
        b[2] = 322717996L;
        b[3] = 1817181343L;
        b[4] = 1916880576L;
        b[5] = 1376134909L;
        b[6] = 1536615367L;
        b[7] = 969122838L;
        b[8] = 935365158L;
        b[9] = 2029694981L;
        b[10] = 538501427L;
        b[11] = 1099949760L;
        b[12] = 977807481L;
        int a = (int)b[12] ^ 0x44E6D8F3;
        StringBuilder stringBuilder = new StringBuilder();
        int i = (int)b[1] ^ 0x12DAB99D;
        label10: while (i < paramString.length()) {
            char c = paramString.charAt(i);
            stringBuilder.append((char)(c ^ (int)b[10] ^ 0x20182D44));
            while (true) {
                i++;
                a = (int)b[11] ^ 0x418FE6B4;
                if ((a * a + a + ((int)b[5] ^ 0x520626FA)) % ((int)b[6] ^ 0x5B96E396) == 0)
                    continue;
                continue label10;
            }
        }
        return stringBuilder.toString();
    }

    public static void main(String[] args) {
        // run the password string on the string function (see above) to get the password hash
        var string = b("렒蘐鱇騢鼡謴꼾︻ꁏ꤅뤃ꔍ먅ꈽ");

        // reversed hash function (see below), a bit of work to come up with obfuscation
        var encoded = string.getBytes(StandardCharsets.UTF_16);
        var bytes = Base64.getDecoder().decode(Arrays.copyOfRange(encoded,2,encoded.length));
        for (var i = bytes.length; i > 0; i--) {
            for (int j = bytes.length-1; j >= 0; j--) {
                bytes[j] = (byte) (bytes[j]-(i-12)*j-6);
            }
        }
        System.out.println(new String(bytes,StandardCharsets.UTF_8));
    }


    // simplified hash function from decompiled code (yours might be a bit different depending on decompiler
    static String a(String paramString) {
        byte[] arrayOfByte = paramString.getBytes(StandardCharsets.UTF_8);
        int i = 1; // (int)b[0] ^ 0x7EAEF08A;
        label15: while (i <= paramString.length()) {
            int j = 0; // (int)b[1] ^ 0x12DAB99D;
            while (j < arrayOfByte.length) {
                arrayOfByte[j] = (byte)(arrayOfByte[j] + (i - 12) * j + 6); // (int)b[2] ^ 0x133C4920) = 12, ((int)b[3] ^ 0x6C4FFC99) = 6
                j++;
                // Only here to confuse you
                // a = (int)b[4] ^ 0x724146AC;
                // if ((a * a + a + ((int)b[5] ^ 0x520626FA)) % ((int)b[6] ^ 0x5B96E396) == 0);
            }
            // Only here to confuse you, will only loop once
            // while (true) {
                i++;
                // a = (int)b[7] ^ 0x39C3A44C;
                // if ((a * a + a + ((int)b[5] ^ 0x520626FA)) % ((int)b[6] ^ 0x5B96E396) == 0)
                // continue;
                // continue label15;
            // }
        }
        return new String(Base64.getEncoder().encode(arrayOfByte), StandardCharsets.UTF_16);
    }
}


