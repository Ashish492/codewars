import java.util.HashSet;
import java.util.Set;

public class CountingDuplicates {
  public static int duplicateCount(String text) {
    int count = 0;
    String lowerCaseInput=text.toLowerCase();
    Set<Character> trackChar=new HashSet<>();
    for(char s:lowerCaseInput.toCharArray()){
      if(!trackChar.contains(s) && lowerCaseInput.indexOf(s)!=lowerCaseInput.lastIndexOf(s)) count++;
      trackChar.add(s);
    }
    return count;
  }
}
