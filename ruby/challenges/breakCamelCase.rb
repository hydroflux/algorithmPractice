# CHALLENGE => Break camelCase
=begin
  Complete the solution so that the function will break up camel casing, using a space between words.

  Example
  "camelCasing"  =>  "camel Casing"
  "identifier"   =>  "identifier"
  ""             =>  ""
=end

# Method 1 => Status Quo
def breakCamelCase string
  string.split('')
        .map { | char | char == char.capitalize ? " #{char}" : char }
        .join()
end

# Method 2 => Using 'gsub' and Regex
def breakCamelCase_2 string
  string.gsub /([A-Z])/, ' \1'
end

# 'gsub' is using regex to check for a capital letter & adding a leading space where it is found

# Method 3 => Method 2 (Single Line)
def breakCamelCase_3(string) string.gsub /([A-Z])/, ' \1' end

# Test Cases
string_1 = "camelCasing"
string_2 = "identifier"
string_3 = "yearCompanyLeaveFind"
string_4 = "factNounsDifferentWay"

solution_1 = "camel Casing"
solution_2 = "identifier"
solution_3 = "year Company Leave Find"
solution_4 = "fact Nouns Different Way"

# Method 1 Testing
p breakCamelCase(string_1) == solution_1
p breakCamelCase(string_2) == solution_2
p breakCamelCase(string_3) == solution_3
p breakCamelCase(string_4) == solution_4

# Method 2 Testing
p breakCamelCase_2(string_1) == solution_1
p breakCamelCase_2(string_2) == solution_2
p breakCamelCase_2(string_3) == solution_3
p breakCamelCase_2(string_4) == solution_4

# Method 3 Testing
p breakCamelCase_3(string_1) == solution_1
p breakCamelCase_3(string_2) == solution_2
p breakCamelCase_3(string_3) == solution_3
p breakCamelCase_3(string_4) == solution_4