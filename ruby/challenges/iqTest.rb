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
    puts number_array
    
    evens = number_array.filter { | number | number.to_i.even? }
    odds = number_array.filter { | number | number.to_i.odd? }

    evens.length > odds.length ?
      number_array.find_index( odds[0] ) + 1
      : number_array.find_index( evens[0] ) + 1
end