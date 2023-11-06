import java.util.stream.Stream;
public class NumberUtils {
    public static boolean isNarcissistic(int number) {
        String stringValue=String.valueOf(number);
        int length = stringValue.length();
        System.out.println(length);
       Stream.of(stringValue.toCharArray()).reduce(0,(acc,num)->acc+Math.pow((int) num, length));
        return false;
    }
    public static void main(String[] args) {
        isNarcissistic(153);
    }
}