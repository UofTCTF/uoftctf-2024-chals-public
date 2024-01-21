// This is the source code for BankChallenge.jar
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Map;
import java.util.Scanner;

class User {
    private final String password;
    private final float balance;

    User(String passwordHash, float balance) {
        this.password = passwordHash;
        this.balance = balance;
    }

    boolean checkPassword(String password) {
        return Main.hashString(password).equals(this.password);
    }

    public float getBalance() {
        return balance;
    }
}

public class Main {
    static String hashString(String string) {
        var bytes = string.getBytes(StandardCharsets.UTF_8);
        for (var i = 1; i <= string.length(); i++) {
            for (int j = 0; j < bytes.length; j++) {
                bytes[j] = (byte) (bytes[j] + i * j - 12);
            }
        }
        return new String(Base64.getEncoder().encode(bytes), StandardCharsets.UTF_16);
    }

    public static void main(String[] args) {
        System.out.println("==============================");
        System.out.println("Welcome to TotallySecureBank™");
        System.out.println("==============================");
        System.out.println();
        System.exit(run());
    }

    private static int run() {
        var scanner = new Scanner(System.in);
        var users = Map.of(
                "user", new User("捷㉫佴䩫㕰䄷ㅈ䕃湩浐䭣䴽", 10),
                "admin", new User("䩘䉵慗书噓硍啫瑎䱄灊剫挸偃癬㕧㴽", 100000)
        );
        String username;
        while (true) {
            System.out.println("Please enter your username:");
            username = scanner.nextLine();
            if (users.containsKey(username)) {
                break;
            }
            System.out.println("User not found");
        }

        while (true) {
            System.out.println("Please enter your password:");
            var password = scanner.nextLine();
            if (users.get(username).checkPassword(password)) {
                break;
            }
            System.out.println("Incorrect password!");
        }
        System.out.println("Welcome back " + username + "! your balance is " + users.get(username).getBalance());
        return 0;
    }
}