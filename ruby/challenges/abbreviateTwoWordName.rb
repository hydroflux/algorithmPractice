# CHALLENGE => Abbreviate a Two Word Name
=begin
  Write a function to convert a name into initials.
  This kata strictly takes two words with one space in between them.

  The output should be two capital letters with a dot separating them.

  It should look like this:

  Sam Harris => S.H

  patrick feeney => P.F
=end

# Method 1 => Status Quo
def abbrev_name name
  name.split()
      .map { | word | word[0].upcase }
      .join('.')
end

# Method 2 => Using 'map' & 'chr'
def abbrev_name_2 name
  name.upcase
      .split
      .map(&:chr)
      .join('.')
end

# chr is a String class method in Ruby which is used to return a one-character string at the beginning of the string.

# Testing
name_1 = 'Sam Harris'
name_2 = 'Patrick Freeman'
name_3 = 'Evan Cole'
name_4 = 'P Favuzzi'
name_5 = 'David Mendieta'
abbrev_1 = 'S.H'
abbrev_2 = 'P.F'
abbrev_3 = 'E.C'
abbrev_4 = 'P.F'
abbrev_5 = 'D.M'

# Method 1 Testing
p abbrev_name(name_1) == abbrev_1
p abbrev_name(name_2) == abbrev_2
p abbrev_name(name_3) == abbrev_3
p abbrev_name(name_4) == abbrev_4
p abbrev_name(name_5) == abbrev_5

# Method 2 Testing
p abbrev_name_2(name_1) == abbrev_1
p abbrev_name_2(name_2) == abbrev_2
p abbrev_name_2(name_3) == abbrev_3
p abbrev_name_2(name_4) == abbrev_4
p abbrev_name_2(name_5) == abbrev_5