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

solution_1 = 'Bart, Lisa & Maggie'


# Method 1 Testing
print(namelist(dict_1) == solution_1)
