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
    for index in range(len(array)):
        if sum(array[index: index + 2]) == total:
            return array[index: index+2]


# Test Cases
array_1 = [11, 3, 7, 5]
sum_1 = 10

solution_1 = [3, 7]


# Method 1 Testing
print(sum_pairs(array_1, sum_1) == solution_1)
