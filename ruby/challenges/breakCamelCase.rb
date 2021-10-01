# CHALLENGE => Break camelCase
=begin
  Complete the solution so that the function will break up camel casing, using a space between words.

  Example
  'camelCasing'  =>  'camel Casing'
  'identifier'   =>  'identifier'
  ''             =>  ''
=end

# Method 1 => Status Quo
def breakCamelCase string
  string.split('')
        .map { | char | char == char.capitalize ? " #{char}" : char }
        .join
end

# Method 2 => Using 'gsub' and Regex
def breakCamelCase2 string
  string.gsub(/([A-Z])/, ' \1')
end

# 'gsub' is using regex to check for a capital letter & adding a leading space where it is found

# Method 3 => Method 2 (Single Line)
def breakCamelCase3(string) string.gsub /([A-Z])/, ' \1' end

# Test Cases
string1 = 'camelCasing'
string2 = 'identifier'
string3 = 'yearCompanyLeaveFind'
string4 = 'factNounsDifferentWay'

solution1 = 'camel Casing'
solution2 = 'identifier'
solution3 = 'year Company Leave Find'
solution4 = 'fact Nouns Different Way'

# Method 1 Testing
p breakCamelCase(string1) == solution1
p breakCamelCase(string2) == solution2
p breakCamelCase(string3) == solution3
p breakCamelCase(string4) == solution4

# Method 2 Testing
p breakCamelCase2(string1) == solution1
p breakCamelCase2(string2) == solution2
p breakCamelCase2(string3) == solution3
p breakCamelCase2(string4) == solution4

# Method 3 Testing
p breakCamelCase3(string1) == solution1
p breakCamelCase3(string2) == solution2
p breakCamelCase3(string3) == solution3
p breakCamelCase3(string4) == solution4