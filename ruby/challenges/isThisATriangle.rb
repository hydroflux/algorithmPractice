# CHALLENGE => Is this a triangle?
=begin
    Implement a method that accepts 3 integer values a, b, c.
    The method should return true if a triangle can be built with the sides of given length and false in any other case.

    (In this case, all triangles must have surface greater than 0 to be accepted).
=end

# METHOD 1 => Status Quo
def is_triangle a, b, c
    a + b > c &&
    a + c > b &&
    b + c > a ? ( return true ) : ( return false )
end

# TESTING
a = 1
b = 2
c = 2
a_2 = 7
b_2 = 2
c_2 = 2

puts is_triangle( a, b, c ) == true
puts is_triangle( a_2, b_2, c_2 ) == false