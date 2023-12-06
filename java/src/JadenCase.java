import java.util.ArrayList;

public class JadenCase {
    public  String toJadenCase(String phrase){
        if(phrase.isBlank() || phrase.isEmpty()) return null;
        ArrayList<String> words = new ArrayList<>();
        for(String s : phrase.split(" ")){
           words.add(Character.toUpperCase(s.charAt(0))+s.substring(1));
        }
        return String.join(" ",words);
    }
}
