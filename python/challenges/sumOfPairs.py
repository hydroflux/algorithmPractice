'''
    CHALLENGE => Sum Of Pairs

    Given a list of integers and a single sum value, return the first two values
    (parse from the left please) in order of appearance that add up to form the sum.

    sum_pairs([11, 3, 7, 5],         10)
    #              ^--^      3 + 7 = 10
    == [3, 7]

    sum_pairs([4, 3, 2, 3, 4],         6)
    #          ^-----^         4 + 2 = 6, indices: 0, 2 *
    #             ^-----^      3 + 3 = 6, indices: 1, 3
    #                ^-----^   2 + 4 = 6, indices: 2, 4
    #  * entire pair is earlier, and therefore is the correct answer
    == [4, 2]

    sum_pairs([0, 0, -2, 3], 2)
    #  there are no pairs of values that can be added to produce 2.
    == None/nil/undefined (Based on the language)

    sum_pairs([10, 5, 2, 3, 7, 5],         10)
    #              ^-----------^   5 + 5 = 10, indices: 1, 5
    #                    ^--^      3 + 7 = 10, indices: 3, 4 *
    #  * entire pair is earlier, and therefore is the correct answer
    == [3, 7]
    Negative numbers and duplicate numbers can and will appear.

    NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements.
    Be sure your code doesn't time out.
'''

# Method 1 => Status Quo
def sum_pairs(array, total):
    pairs = []
    distance = len(array)
    for i in range(len(array)):
        for j in range(len(array) - (i + 1)):
            k = array[i + 1:][j]
            j += (i + 1)
            if array[i] + k == total:
                if j - i < distance:
                    pairs = [array[i], k]
                    distance = j - i
                    if distance == 1: return pairs
    if pairs: return pairs
                


# Test Cases
array_1 = [11, 3, 7, 5]
sum_1 = 10

array_2 = [1, 4, 8, 7, 3, 15]
sum_2 = 8

array_3 = [10, 5, 2, 3, 7, 5]
sum_3 = 10

array_4 = [20, -13, 40]
sum_4 = -7

array_5 = [10, 5, 2, 3, 7, 5]
sum_5 = 10

array_6 = [1, 2, 3, 4, 1, 0]
sum_6 = 2

solution_1 = [3, 7]
solution_2 = [1, 7]
solution_3 = [5, 5]
solution_4 = None
solution_5 = [3, 7]
solution_6 = [1, 1]


# Method 1 Testing
# print(sum_pairs(array_1, sum_1) == solution_1)
# print(sum_pairs(array_2, sum_2) == solution_2)
# print(sum_pairs(array_3, sum_3) == solution_3)
# print(sum_pairs(array_4, sum_4) == solution_4)
# print(sum_pairs(array_5, sum_5) == solution_5)
# print(sum_pairs(array_6, sum_6) == solution_6)
print(sum_pairs(array_6, sum_6))
