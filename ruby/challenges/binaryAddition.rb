# CHALLENGE => Binary Addition
=begin
  Implement a function that adds two numbers together and returns their sum in binary.
  The conversion can be done before, or after the addition.

  The binary number returned should be a string.

  Examples:

  add_binary(1, 1) == "10" (1 + 1 = 2 in decimal or 10 in binary)
  add_binary(5, 9) == "1110" (5 + 9 = 14 in decimal or 1110 in binary)
=end

# METHOD 1 => Status Quo
def add_binary a, b
  (a + b).to_s(2)
end

# Testing
p add_binary(1,1) == "10"
p add_binary(0,1) == "1"
p add_binary(1,0) == "1"
p add_binary(2,2) == "100"
p add_binary(51,12) == "111111"