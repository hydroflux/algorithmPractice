# CHALLENGE => Unique In Order
'''
    Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

    For example:

    unique_in_order('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
    unique_in_order('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
    unique_in_order([1,2,2,3,3])       == [1,2,3]
'''

# Method 1 => Status Quo
def unique_in_order(iterable):
    list = ['']
    for char in iterable:
        if list[-1] != char:
            list.append(char)
    list.pop(0)
    return list



# Test Cases
string_1 = 'AAAABBBCCDAABBB'

solution_1 = ['A', 'B', 'C', 'D', 'A', 'B']

# Method 1 Testing
print(unique_in_order(string_1) == solution_1)
