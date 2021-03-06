# CHALLENGE => Inegers: Recreation One
=begin
  1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246.
  Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681.
  The sum of these squares is 84100 which is 290 * 290.

  Task:
  Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

  We will return an array of subarrays or of tuples (in C an array of Pair) or a string.
  
  The subarrays (or tuples or Pairs) will have two elements:
    1) The number the squared divisors of which is a square and 
    2) then the sum of the squared divisors.

  Example:
  list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
  list_squared(42, 250) --> [[42, 2500], [246, 84100]]

  The form of the examples may change according to the language, see "Sample Tests".

  Note
  In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.
=end

# Method 1 => Status Quo
def list_squared m, n
  (m..n).map { | i | [ i , (1..i)
        .reduce([]) { | array, j |  i % j == 0 ? array.push( j ) : array } 
        .reduce(0)  { | sum, k | sum +=  k*k } ] }
        .filter { | l | ( Math.sqrt(l[1]) % 1 ).zero? }
end


# Method 1 => Using For Loops & If Statements to Try & Optimize
def list_squared_2 m, n, squared_array=[]
  for i in (m..n)
    divisors = []
    for j in (1..i)
      if i % j == 0
        divisors.push( j )
      end
    end

    reduced_divisors = divisors.reduce(0) { | sum, k | sum += k*k }
    if ( Math.sqrt( reduced_divisors ) % 1 ).zero?
      squared_array.push([ i, reduced_divisors ])
    end
  end

  squared_array
end

# Method 3 => Status Quo Refined?
def list_squared_3 m, n
  (m..n).map { | i | [ i , (1..i)
        .reduce(0) { | sum, j |  i % j == 0 ? sum += j*j : sum } ]}
        .filter { | l | ( Math.sqrt(l[1]) % 1 ).zero? }
end


# Method 4 => Optimizing...
def list_squared_4 m, n
  (m..n).reduce([]){ | array, i |
    reduced = (1..i).reduce(0){ | sum, j |  i % j == 0 ? sum += j*j : sum }

    ( Math.sqrt( reduced ) % 1 ).zero? ?
    array.push( [ i, reduced ] ) : array }
end


# Method 5 => Method 3 Optimized
def list_squared_5 m, n
  (m..n).map { | i | [ i , (1..i/2.to_i)
        .reduce(i*i) { | sum, j |  i % j == 0 ? sum += j*j : sum } ]}
        .filter { | l | ( Math.sqrt(l[1]) % 1 ).zero? }
end

# By reducing the numbers checked to half of the list, the speed of the solution doubled--there are no divisors other than "i" above i/2
# Then making the reduce value start at i squared removed the need to go all the way up to the "i" as a divisor

# Method 6 => Using 'upto'
# def list_squared_6 m, n
#   result = []
#   m.upto(n) do |num|
#     devisors = Set.new
#     1.upto(Math.sqrt(num)) do |d| 
#       devisors << d**2 << (num / d)**2 if num % d == 0
#     end
#     sum = devisors.inject(0, :+)
#     result << [num, sum] if Math.sqrt(sum) % 1== 0
#   end
#   return result
# end

# 'upto' iterates the given block, passing in integer values from int up to and including 'limit'

# Other code wars solutions are using imported packages, which seems like a pretty bullshit solution considering the premise of the exercise

# Test Cases
m_1 = 1
m_2 = 42
m_3 = 250

n_1 = 250
n_2 = 500

solution_1 = [[1, 1], [42, 2500], [246, 84100]]
solution_2 = [[42, 2500], [246, 84100]]
solution_3 = [[287, 84100]]

p list_squared_5(42, 43)

# Method 1 Testing
p list_squared(m_1, n_1) == solution_1
p list_squared(m_2, n_1) == solution_2
p list_squared(m_3, n_2) == solution_3

# Method 2 Testing
p list_squared_2(m_1, n_1) == solution_1
p list_squared_2(m_2, n_1) == solution_2
p list_squared_2(m_3, n_2) == solution_3

# Method 3 Testing
p list_squared_3(m_1, n_1) == solution_1
p list_squared_3(m_2, n_1) == solution_2
p list_squared_3(m_3, n_2) == solution_3

# Method 4 Testing
p list_squared_4(m_1, n_1) == solution_1
p list_squared_4(m_2, n_1) == solution_2
p list_squared_4(m_3, n_2) == solution_3

# Method 5 Testing
p list_squared_5(m_1, n_1) == solution_1
p list_squared_5(m_2, n_1) == solution_2
p list_squared_5(m_3, n_2) == solution_3

# Method 6 Testing
# p list_squared_6(m_1, n_1) == solution_1
# p list_squared_6(m_2, n_1) == solution_2
# p list_squared_6(m_3, n_2) == solution_3