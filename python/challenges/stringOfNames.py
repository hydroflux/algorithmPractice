'''
    CHALLENGE => Format a String of Names

    Given: an array containing hashes of names

    Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

    Example:

    namelist([ {'name': 'Bart'}, {'name': 'Lisa'}, {'name': 'Maggie'} ])
    # returns 'Bart, Lisa & Maggie'

    namelist([ {'name': 'Bart'}, {'name': 'Lisa'} ])
    # returns 'Bart & Lisa'

    namelist([ {'name': 'Bart'} ])
    # returns 'Bart'

    namelist([])
    # returns ''
    Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

'''

# Method 1 => Status Quo
def namelist(names):
    name_array = [name['name'] for name in names]
    return f"{(', ').join(name_array[:-1])} & {name_array[-1]}" if len(name_array) > 1 else ('').join(name_array)


# Test Cases
dict_1 = [ {'name': 'Bart'}, {'name': 'Lisa'}, {'name': 'Maggie'} ]
dict_2 = [{'name': 'Bart'},{'name': 'Lisa'},{'name': 'Maggie'},{'name': 'Homer'},{'name': 'Marge'}]
dict_3 = [{'name': 'Bart'}]
dict_4 = []

solution_1 = 'Bart, Lisa & Maggie'
solution_2 = 'Bart, Lisa, Maggie, Homer & Marge'
solution_3 = 'Bart'
solution_4 = ''

# Method 1 Testing
print(namelist(dict_1) == solution_1)
print(namelist(dict_2) == solution_2)
print(namelist(dict_3) == solution_3)
print(namelist(dict_4) == solution_4)
