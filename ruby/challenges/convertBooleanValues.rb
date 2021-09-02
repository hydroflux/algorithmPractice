# CHALLENGE => Convert Boolean Values to Strings 'Yes' or 'No'
=begin
    Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
=end

# METHOD 1 => Status Quo
def bool_to_word boolean
    boolean == true ? "Yes" : "No"
end