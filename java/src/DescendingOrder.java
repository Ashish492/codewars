import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.stream.Collectors;

public class DescendingOrder {
    public static  int sortDesc(final int num){
        return Integer.parseInt(String.valueOf(num).chars().mapToObj(v->String.valueOf(Character.getNumericValue(v))).sorted(Comparator.reverseOrder()).collect(Collectors.joining()));
    }
}
