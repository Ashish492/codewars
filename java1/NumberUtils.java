
public class NumberUtils {
    public static boolean isNarcissistic(int number) {
        String stringValue = String.valueOf(number);
        int length = stringValue.length();
        int result = stringValue.chars().map(Character::getNumericValue).reduce(0,
                (acc, num) -> acc + (int) Math.pow((int) num, length));
        return result == number;
    }

    public static void main(String[] args) {
        System.out.println(isNarcissistic(153));
    }
}