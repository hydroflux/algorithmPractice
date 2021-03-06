# CHALLENGE => Give Me a Diamond
=begin
  Jamie is a programmer, and James' girlfriend.
  She likes diamonds, and wants a diamond string from James.
  Since James doesn't know how to make this happen, he needs your help.

  Task
  You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters.
  Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

  Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

  Examples
  A size 3 diamond:

   *
  ***
   *
  ...which would appear as a string of " *\n***\n *\n"

  A size 5 diamond:

    *
   ***
  *****
   ***
    *
  ...that is:

  "  *\n ***\n*****\n ***\n  *\n"
=end

# Method 1 => Status Quo
def diamond number, count=-1
  (1..number).reduce('') do | string, element |
    count += 1
    if number.even?
      return string
    else
      space = ' ' * count
      stars = '*' * count
    end
    string += "#{space}#{stars}\n"
  end
end

# *\n  ***\n 

puts diamond 3
# number.reduce('') { }