# CHALLENGE => Jaden Casing Strings
=begin
  Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013).
  Jaden is also known for some of his philosophy that he delivers via Twitter.
  When writing on Twitter, he is known for almost always capitalizing every word.
  For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

  Your task is to convert strings to how they would be written by Jaden Smith.
  The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

  Example:

  Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
  Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
=end

# Method 1 => Status Quo
class String
  def toJadenCase 
    self.split
        .map{ | word | "#{word[0].upcase}#{word[1..word.length]}"}
        .join(' ')
  end

  # Method 2 => Simpler solution, using the 'capitalize' method
  def toJadenCase_2
    self.split
        .map(&:capitalize)
        .join(' ')
  end

  # Fine with this, I was looking for a 'title' string method for Method 1
end

# Testing
string_1 = "How can mirrors be real if our eyes aren't real"
string_2 = "I watch Twilight every night"
string_3 = "Most trees are blue"
string_4 = "All the rules in this world were made by someone no smarter than you. So make your own."

solution_1 = "How Can Mirrors Be Real If Our Eyes Aren't Real"
solution_2 = "I Watch Twilight Every Night"
solution_3 = "Most Trees Are Blue"
solution_4 = "All The Rules In This World Were Made By Someone No Smarter Than You. So Make Your Own."

# Method 1 Testing
p string_1.toJadenCase() == solution_1
p string_2.toJadenCase() == solution_2
p string_3.toJadenCase() == solution_3
p string_4.toJadenCase() == solution_4

# Method 2 Testing
p string_1.toJadenCase_2() == solution_1
p string_2.toJadenCase_2() == solution_2
p string_3.toJadenCase_2() == solution_3
p string_4.toJadenCase_2() == solution_4