# CHALLENGE => Shortest Word
=begin
  Simple, given a string of words, return the length of the shortest word(s).

  String will never be empty and you do not need to account for different data types.
=end

# Method 1 => Status Quo
def find_short string
  string.split
        .reduce { | shortest, word | word.length < shortest.length ? word : shortest }
        .length
end

# Method 2 => Mapping Using 'size' & Returning 'min'
def find_short_2 string
  string.split
        .map(&:size)
        .min
end

# Testing
string_1 = "bitcoin take over the world maybe who knows perhaps"
string_2 = "turns out random test cases are easier than writing out basic ones"
string_3 = "lets talk about javascript the best language"
string_4 = "i want to travel the world writing code one day"
string_5 = "Lets all go on holiday somewhere very cold"
string_6 = "Let's travel abroad shall we"

solution_1 = 3
solution_2 = 3
solution_3 = 3
solution_4 = 1
solution_5 = 2
solution_6 = 2

# Method 1 Testing
p find_short(string_1) == solution_1
p find_short(string_2) == solution_2
p find_short(string_3) == solution_3
p find_short(string_4) == solution_4
p find_short(string_5) == solution_5
p find_short(string_6) == solution_6

# Method 2 Testing
p find_short_2(string_1) == solution_1
p find_short_2(string_2) == solution_2
p find_short_2(string_3) == solution_3
p find_short_2(string_4) == solution_4
p find_short_2(string_5) == solution_5
p find_short_2(string_6) == solution_6