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
array_2 = [0, 3, 4, 5]
array_3 = []
array_4 = [-1, 0, 1]

solution_1 = 9
solution_2 = 50
solution_3 = 0
solution_4 = 2


# Method 1 Testing
print(square_sum(array_1) == solution_1)
print(square_sum(array_2) == solution_2)
print(square_sum(array_3) == solution_3)
print(square_sum(array_4) == solution_4)
