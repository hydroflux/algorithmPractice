# CHALLENGE => Counting Sheep...
=begin
    Consider an array/list of sheep where some sheep may be missing from their place.
    We need a function that counts the number of sheep present in the array (true means present).

    For example,
    [ true,  true,  true,  false, true,  true,  true,  true,
      true,  false, true,  false, true,  false, false, true,
      true,  true,  true,  true, false, false, true,  true ]
    The correct answer would be 17.

    Hint: Don't forget to check for bad values like null/undefined
=end

# METHOD 1 => Status Quo
def countSheeps array
    array.select { | value | value == true }
         .reduce(0) { | acc, value | acc + 1 }
end

# METHOD 2 => Using 'count' Enumerator
def countSheeps_2 array
    array.count( true )
end

# Testing
array_1 = [ true,  true,  true,  false, true,  true,  true,  true, true,  false, true,  false,
            true,  false, false, true, true,  true,  true,  true, false, false, true,  true ]
array_2 = [ true, true, true, true, true, true, true, true, true ]
array_3 = [ false, false, false, false, false, false, false, false, false ]
solution_1 = 17
solution_2 = 9
solution_3 = 0

# Method 1
p countSheeps( array_1 ) == solution_1
p countSheeps( array_2 ) == solution_2
p countSheeps( array_3 ) == solution_3

# Method 2
p countSheeps_2( array_1 ) == solution_1
p countSheeps_2( array_2 ) == solution_2
p countSheeps_2( array_3 ) == solution_3