# CHALLENGE => Your Order, Please
=begin
  Your task is to sort a given string. Each word in the string will contain a single number.
  This number is the position the word should have in the result.

  Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

  If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

  Examples
  "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
  "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
  ""  -->  ""
=end

# Method 1 => Status Quo
def order words
  words.split(' ')
       .each_with_object({}) { | string, hash | 
          hash[string.split('').find { | char | char.to_i != 0 }] = string 
        }
       .sort
       .map { | value | value[1] }
       .join(' ')
end

# Method 2 => Using 'sort_by' & 'chars.min'
def order_2 words
  words.split
       .sort_by { | word | word.chars.min }
       .join(' ')
end

# Sort_by is organizing the array based on some value, which is defined
# as the minimum value of each order--#'s must be smaller than letters;
# Split works on a space unless told otherwise

# Method 3 => Method 2 + Regex
def order_3(words)
  words.split
       .sort_by{ |word| word[/\d/] }
       .join(' ')
end

# Testing
string_1 = 'is2 Thi1s T4est 3a'
string_2 = '4of Fo1r pe6ople g3ood th5e the2'
string_3 = ''
string_4 = 'y3oung abo6ut ba8d their5 old1 p2erson lo4ng she7 9be'
string_5 = 'o4ld woul2d smal5l important1 p8art g3overnment r6ight 7about'

solution_1 = 'Thi1s is2 3a T4est'
solution_2 = 'Fo1r the2 g3ood 4of th5e pe6ople'
solution_3 = ''
solution_4 = 'old1 p2erson y3oung lo4ng their5 abo6ut she7 ba8d 9be'
solution_5 = 'important1 woul2d g3overnment o4ld smal5l r6ight 7about p8art'

# Method 1 Testing
p order(string_1) == solution_1
p order(string_2) == solution_2
p order(string_3) == solution_3
p order(string_4) == solution_4
p order(string_5) == solution_5

# Method 2 Testing
p order_2(string_1) == solution_1
p order_2(string_2) == solution_2
p order_2(string_3) == solution_3
p order_2(string_4) == solution_4
p order_2(string_5) == solution_5

# Method 3 Testing
p order_3(string_1) == solution_1
p order_3(string_2) == solution_2
p order_3(string_3) == solution_3
p order_3(string_4) == solution_4
p order_3(string_5) == solution_5
