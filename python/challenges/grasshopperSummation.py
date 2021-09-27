# CHALLENGE => Grasshopper - Summation
'''
    Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

    For example:

    summation(2) -> 3
    1 + 2

    summation(8) -> 36
    1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
'''

# Method 1 => Status Quo
def summation(num, sum=0):
    for int in range(num + 1):
        sum += int
    return sum


# Method 2 => Using the 'sum' method
def summation_2(num):
    return sum(range(num + 1))


# Test Cases
num_1 = 8
num_2 = 22
num_3 = 100
num_4 = 213

solution_1 = 36
solution_2 = 253
solution_3 = 5050
solution_4 = 22791

# Method 1 Testing
print(summation(num_1) == solution_1)
print(summation(num_2) == solution_2)
print(summation(num_3) == solution_3)
print(summation(num_4) == solution_4)

# Method 2 Testing
print(summation_2(num_1) == solution_1)
print(summation_2(num_2) == solution_2)
print(summation_2(num_3) == solution_3)
print(summation_2(num_4) == solution_4)
