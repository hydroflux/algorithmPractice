# CHALLENGE => Multi-Tap Keypad Text Entry on an Old Mobile Phone
=begin
    Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages
    on candybar-shaped feature phones with 3x4 numeric keypads.

    ------- ------- -------
    |     | | ABC | | DEF |
    |  1  | |  2  | |  3  |
    ------- ------- -------
    ------- ------- -------
    | GHI | | JKL | | MNO |
    |  4  | |  5  | |  6  |
    ------- ------- -------
    ------- ------- -------
    |PQRS | | TUV | | WXYZ|
    |  7  | |  8  | |  9  |
    ------- ------- -------
    ------- ------- -------
    |     | |space| |     |
    |  *  | |  0  | |  #  |
    ------- ------- -------
    
    Prior to the development of T9 (predictive text entry) systems, the method
    to type words was called "multi-tap" and involved pressing a button repeatedly
    to cycle through the possible values.

    For example, to type a letter "R" you would press the 7 key three times
    (as the screen display for the current character cycles through P->Q->R->S->7).
    A character is "locked in" once the user presses a different key or pauses for
    a short period of time (thus, no extra button presses are required beyond what
    is needed for each letter individually).
    
    The zero key handles spaces, with one press of the key producing a space
    and two presses producing a zero.

    In order to send the message "WHERE DO U WANT 2 MEET L8R"
    a teen would have to actually do 47 button presses.
    No wonder they abbreviated.

    For this assignment, write a module that can calculate the amount of button presses
    required for any phrase.
    
    Punctuation can be ignored for this exercise.
    
    Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters
    (but you should allow your module to accept input in either for convenience).

    Hint: While it wouldn't take too long to hard code the amount of keypresses
    for all 26 letters by hand, try to avoid doing so!
    (Imagine you work at a phone manufacturer who might be testing out different
    keyboard layouts, and you want to be able to test new ones rapidly.)
=end

# Method 1 => Status Quo
PRESSES = {
    1 => " 1ADGJMPTW",
    2 => "0BEHKNQUX",
    3 => "CFILORV",
    4 => "23456789SZ"
}

def presses(phrase)
    phrase.split('').reduce(0){ | agg, char | 
        value = PRESSES.key(
            PRESSES.values.find{ | value | value.include? char.upcase }
        )
      value ? agg + value : agg
     }
end


# Method 2 = > Mapping over Number Values and Returning Index
def presses2(phrase)
    press = ["1", " 0", "ABC2", "DEF3", "GHI4", "JKL5", "MNO6", "TUV8", "PQRS7", "WXYZ9"]
    phrase.upcase.chars.map do |c|
      1 + press.find { |grp| grp.include?(c) }.index(c)
    end
  end

# Find the index (plus 1) of each letter by its number in the array strings

# Test Cases
string_1 = 'LOL'
string_2 = 'HOW R U'
string_3 = "0"
string_4 = "IS NE1 OUT THERE"
string_5 = "lol"
string_6 = "WHERE DO U WANT 2 MEET L8R"

solution_1 = 9
solution_2 = 13
solution_3 = 2
solution_4 = 31
solution_5 = 9
solution_6 = 47

# Method 1 Testing
p (presses(string_1) == solution_1)
p (presses(string_2) == solution_2)
p (presses(string_3) == solution_3)
p (presses(string_4) == solution_4)
p (presses(string_5) == solution_5)
p (presses(string_6) == solution_6)

# Method 2 Testing
p (presses2(string_1) == solution_1)
p (presses2(string_2) == solution_2)
p (presses2(string_3) == solution_3)
p (presses2(string_4) == solution_4)
p (presses2(string_5) == solution_5)
p (presses2(string_6) == solution_6)