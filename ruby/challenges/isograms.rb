# CHALLENGE => Isograms
=begin
    An isogram is a word that has no repeating letters, consecutive or non-consecutive.
    Implement a function that determines whether a string that contains only letters is an isogram.
    Assume the empty string is an isogram. Ignore letter case.

    is_isogram("Dermatoglyphics" ) == true
    is_isogram("aba" ) == false
    is_isogram("moOse" ) == false # -- ignore letter case
=end

# METHOD 1 => Status Quo
def is_isogram string
    string.downcase.split('').uniq == string.downcase.split('')
end

# METHOD 2 => Using 'chars' Instead of 'split'
def is_isogram_2 string
    string.downcase.chars.uniq == string.downcase.chars
end

# TESTING
string1 = "isogram"
string2 = "Dermatoglyphics"
string3 = "aba"
string4 = "moOse"
string5 = "isIsogram"
string6 = ""

# Method 1 Testing
puts( is_isogram(string1) == true )
puts( is_isogram(string2) == true )
puts( is_isogram(string3) == false )
puts( is_isogram(string4) == false )
puts( is_isogram(string5) == false )
puts( is_isogram(string6) == true )

# Method 2 Testing
puts( is_isogram_2(string1) == true )
puts( is_isogram_2(string2) == true )
puts( is_isogram_2(string3) == false )
puts( is_isogram_2(string4) == false )
puts( is_isogram_2(string5) == false )
puts( is_isogram_2(string6) == true )