# CHALLENGE => Convert Boolean Values to Strings 'Yes' or 'No'
=begin
    Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
=end

# METHOD 1 => Status Quo
def bool_to_word boolean
    boolean == true ? "Yes" : "No"
end

# METHOD 2 => More Efficient solution
def bool_to_word_2 boolean
    !!boolean ? "Yes" : "No"
end

# TESTING
# Method 1
puts bool_to_word(true) == 'Yes'
puts bool_to_word(false) == 'No'

# Method 2
puts bool_to_word_2(true) == 'Yes'
puts bool_to_word_2(false) == 'No'