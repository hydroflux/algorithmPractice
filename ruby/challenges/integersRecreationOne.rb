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
        .reduce([]) { | squared_array, l | ( Math.sqrt(l) % 1 ).zero? ?
          squared_array.push( l ) : squared_array }
        # .map { | l |  }
        # .reduce([]) { | squared_array, l | Math.sqrt(l[1]) == Math.sqrt(l[1]).to_i ?
        #   squared_array.push( l ) :
        #   squared_array
        # }
end

# Test Cases
m_1 = 1
m_2 = 42
m_3 = 250

n_1 = 250
n_2 = 500

solution_1 = [[1, 1], [42, 2500], [246, 84100]]
solution_2 = [[42, 2500], [246, 84100]]
solution_3 = [[287, 84100]]

p list_squared(m_2, m_2)

# Method 1 Testing
# p list_squared(m_1, n_1) == solution_1
# p list_squared(m_2, n_1) == solution_2
# p list_squared(m_3, n_2) == solution_3