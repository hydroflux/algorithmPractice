# CHALLENGE => Return Negative
=begin
    In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

    Example:

    makeNegative(1); # return -1
    makeNegative(-5); # return -5
    makeNegative(0); # return 0
    Notes:

    The number can be negative already, in which case no change is required.
    Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
=end

# METHOD 1 => Status Quo
def make_negative number
    number < 0 ? number : number * -1
end

# METHOD 2 => .abs
def make_negative_2 number
    -num.abs
end

# TESTING
puts make_negative(1) == -1
puts make_negative(-5) == -5
puts make_negative(0) == 0