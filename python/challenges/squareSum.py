'''
    CHALLENGE => Square(n) Sum

    Complete the square sum function so that it squares each number passed into it and then sums the results together.

    For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
'''

# Method 1 => Status Quo
def square_sum(numbers):
    return sum([char * char for char in numbers])


# Test Cases
array_1 = [1, 2, 2]

solution_1 = 9


# Method 1 Testing
print(square_sum(array_1) == solution_1)
