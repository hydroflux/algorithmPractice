'''
    CHALLENGE => Sum of Two Lowest Positive Integers

    Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

    For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

    [10, 343445353, 3453445, 3453545353453] should return 3453455.
'''

# Method 1 => Status Quo
def sum_two_smallest_numbers(numbers):
    return sum(sorted(numbers)[:2])


# Test Cases
array_1 = [10, 343445353, 3453445, 3453545353453]
solution_1 = 3453455

# Method 1 Testing
print(sum_two_smallest_numbers(array_1) == solution_1)
