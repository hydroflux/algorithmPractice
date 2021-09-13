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

name_1 = 'Sam Harris'
abbrev_1 = "S.H"

describe "Fixed tests" do
  it "should pass fixed tests" do
    Test.assert_equals(abbrev_name("Sam Harris"), "S.H")
    Test.assert_equals(abbrev_name("Patrick Feenan"), "P.F")
    Test.assert_equals(abbrev_name("Evan Cole"), "E.C")
    Test.assert_equals(abbrev_name("P Favuzzi"), "P.F")
    Test.assert_equals(abbrev_name("David Mendieta"), "D.M")
  end



p abbrev_name(name_1)