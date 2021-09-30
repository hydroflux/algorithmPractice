'''
    CHALLENGE => Round Up to the Next Multiple of 5

    Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

    Examples:

    input:    output:
    0    ->   0
    2    ->   5
    3    ->   5
    12   ->   15
    21   ->   25
    30   ->   30
    -2   ->   0
    -5   ->   -5
    etc.
    Input may be any positive or negative integer (including 0).

    You can assume that all inputs are valid integers.
'''

# Method 1 => Status Quo
def round_to_next5(n):
    if n != 0:
        while n % 5 != 0: n += 1
    return n


# Test Cases
n1 = 0
n2 = 2
n3 = 3
n4 = 14
n5 = 96
n6 = 129341

# Method 1 Testing
print(round_to_next5(n1) == 0)
print(round_to_next5(n2) == 5)
print(round_to_next5(n3) == 5)
print(round_to_next5(n4) == 15)
print(round_to_next5(n5) == 100)
print(round_to_next5(n6) == 129345)
