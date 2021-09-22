# Challenge => Take a Nuumber And Sum Its Digits Raised to the Consecutive Powers
=begin
    The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata.
    What's the use of saying "Eureka"? Because this sum gives the same number.

    In effect: 89 = 8^1 + 9^2

    The next number in having this property is 135.

    See this property again: 135 = 1^1 + 3^2 + 5^3

    We need a function to collect these numbers, that may receive two integers
    a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers
    in the range that fulfills the property described above.

    Let's see some cases:

    sum_dig_pow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

    sum_dig_pow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
    If there are no numbers of this kind in the range [a, b] the function should output an empty list.

    sum_dig_pow(90, 100) == []
=end

# Method 1 => Status Quo
def sum_dig_pow a, b, output=[]
    range = a..b
    for number in range
        output.push(number) unless 
        number.to_s
              .split('')
              .each_with_index
              .reduce(0){ 
                    | sum, ( number, index )| sum += number.to_i ** ( index + 1 )
                } != number
    end
    output
end

# Test Cases
a_1 = 1
a_2 = 10
a_3 = 90
a_4 = 50

b_1 = 10
b_2 = 100
b_3 = 150

solution_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
solution_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
solution_3 = [89]
solution_4 = []
solution_5 = [135]
solution_6 = [89, 135]
solution_7 = [89, 135]

# Method 1 Testing
p sum_dig_pow(a_1, b_1) == solution_1
p sum_dig_pow(a_1, b_2) == solution_2
p sum_dig_pow(a_2, b_2) == solution_3
p sum_dig_pow(a_3, b_2) == solution_4
p sum_dig_pow(a_3, b_3) == solution_5
p sum_dig_pow(a_4, b_3) == solution_6
p sum_dig_pow(a_2, b_3) == solution_7