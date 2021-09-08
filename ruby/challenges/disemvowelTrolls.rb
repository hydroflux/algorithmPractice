# CHALLENGE => Disemvowel Trolls
=begin
    Trolls are attacking your comment section!
    A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

    Your task is to write a function that takes a string and return a new string with all vowels removed.

    For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
    Note: for this kata y isn't considered a vowel.
=end

# METHOD 1 => Status Quo
def disemvowel string
    string.split('').filter { | char | !['a', 'A', 'e', 'E', 'i', 'I', 'o',  'O', 'u', 'U'].include? char }.join
end

# TESTING
string_1 = 'The quick brown fox jumped over the lazy dog'
string_2 = 'Hello operator, I would like to place a call'
string_3 = 'Bananaphone'

p disemvowel(string_1) == 'Th qck brwn fx jmpd vr th lzy dg'
p disemvowel(string_2) == 'Hll prtr,  wld lk t plc  cll'
p disemvowel(string_3) == 'Bnnphn'