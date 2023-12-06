import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

public class BraceChecker {
     Map<Character,Character> braces=new HashMap<Character,Character>();
     {
        braces.put('{', '}');
        braces.put('(', ')');
        braces.put('[', ']');
    }

    public static void main(String[] args) {
        BraceChecker braceChecker=new BraceChecker();
        System.out.println(braceChecker.isValid("(){}[]"));
        System.out.println(braceChecker.isValid("[(])"));
        System.out.println(braceChecker.isValid("[({})](]"));
    }
    public boolean isValid(String braces){
        Stack<Character> charStack=new Stack<Character>();
        for(char brace:braces.toCharArray()){
            if(this.isOpeningBraces(brace))charStack.add(brace);
            else {
                if(charStack.isEmpty() || !this.isValidClosing(charStack.pop(),brace))  return false;
            }
        }
        return  charStack.isEmpty();
    }
    public boolean isOpeningBraces (char str){
    return  this.braces.containsKey(str);
    }
    public boolean isValidClosing(char opening,char closing){
        return this.braces.containsKey(opening) && this.braces.get(opening)==closing;

    }
}
