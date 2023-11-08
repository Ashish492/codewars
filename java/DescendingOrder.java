import java.util.Arrays;
import java.util.Comparator;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class DescendingOrder {
    public static void main(String[] args) {
        System.out.println(sortDesc(12345));
    }

    public static int sortDesc(final int num) {
        return Integer.parseInt(String.valueOf(num).chars().mapToObj(v -> String.valueOf(Character.getNumericValue(v)))
                .sorted(Comparator.reverseOrder()).collect(Collectors.joining()));
    }
}
