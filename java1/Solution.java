/**
 * Solution
 */
public class Solution {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
    public int calc(int number) {
        int sum = 0;
        for (int i = 0; i < number; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
        }
        return sum;
    }
}