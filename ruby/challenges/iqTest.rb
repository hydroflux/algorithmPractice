# CHALLENGE => IQ Test
=begin
    Bob is preparing to pass IQ test.
    
    The most frequent task in this test is to find out which one of the given numbers differs from the others.
    Bob observed that one number usually differs from the others in evenness.
    
    Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

    ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

    Examples:
    iq_test("2 4 7 8 10") => 3 # Third number is odd, while the rest of the numbers are even
    iq_test("1 2 1 1") => 2 # Second number is even, while the rest of the numbers are odd
=end

# Method 1 => Status Quo
def iq_test(numbers)
    number_array = numbers.split(' ')
    
    evens = number_array.filter { | number | number.to_i.even? }
    odds = number_array.filter { | number | number.to_i.odd? }

    evens.length > odds.length ?
      number_array.find_index( odds[0] ) + 1 :
			number_array.find_index( evens[0] ) + 1
end

# Testing
string_1 = '2 4 7 8 10'
string_2 = '1 2 2'
string_3 = '15 31 11 41 51 49 47 25 9 11 27 37 27 11 5 41 27 45 39 15 35 21 9 41 45 35 27 5 1 45 35 35 33 47 52 5 51 27 21 1'
string_4 = '19 27 51 11 49 49 9 15 5 21 9 35 41 5 28 7 41 19 21'
solution_1 = 3
solution_2 = 1
solution_3 = 35
solution_4 = 15

p iq_test(string_1) == solution_1
p iq_test(string_2) == solution_2
p iq_test(string_3) == solution_3
p iq_test(string_4) == solution_4