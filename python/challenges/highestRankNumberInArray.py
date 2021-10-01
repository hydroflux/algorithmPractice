'''
    CHALLENGE => Highest Rank Number in an Array

    Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

    Note: no empty arrays will be given.

    Examples
    [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
    [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
    [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
'''

# Method 1 => Status Quo
def highest_rank(array):
    rank_dict = {}
    for number in array:
        if number in rank_dict:
            rank_dict[number] += 1
        else:
            rank_dict[number] = 1
    max_count = max(rank_dict.values())
    return max([number for number, value in rank_dict.items() if value == max_count])


# Method 2 => Using Sorted
def highestRank(array):
    return sorted(array, key=lambda x: (array.count(x), x))[-1]


# The lambda function is sorting by 'count' and then alphabetically
# The comma lets you add an argument for the x key in the lambda function

# Test Cases
array_1 = [12, 10, 8, 12, 7, 6, 4, 10, 12]
array_2 = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]
array_3 = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]

solution_1 = 12
solution_2 = 12
solution_3 =  3

# Method 1 Testing
print(highest_rank(array_1) == solution_1)
print(highest_rank(array_2) == solution_2)
print(highest_rank(array_3) == solution_3)

# Method 2 Testing
print(highestRank(array_1) == solution_1)
print(highestRank(array_2) == solution_2)
print(highestRank(array_3) == solution_3)
