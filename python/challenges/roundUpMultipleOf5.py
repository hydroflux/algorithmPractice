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


# Method 1 => Reduced Method 1
def roundToNext5(n):
    while n % 5 != 0: n += 1
    return n


# Test Cases
n1 = 0
n2 = 2
n3 = 3
n4 = 14
n5 = 96
n6 = 129341

solution_1 = 0
solution_2 = 5
solution_3 = 5
solution_4 = 15
solution_5 = 100
solution_6 = 129345

# Method 1 Testing
print(round_to_next5(n1) == solution_1)
print(round_to_next5(n2) == solution_2)
print(round_to_next5(n3) == solution_3)
print(round_to_next5(n4) == solution_4)
print(round_to_next5(n5) == solution_5)
print(round_to_next5(n6) == solution_6)

# Method 2 Testing
print(roundToNext5(n1) == solution_1)
print(roundToNext5(n2) == solution_2)
print(roundToNext5(n3) == solution_3)
print(roundToNext5(n4) == solution_4)
print(roundToNext5(n5) == solution_5)
print(roundToNext5(n6) == solution_6)
