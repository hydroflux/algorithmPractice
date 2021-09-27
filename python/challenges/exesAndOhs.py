# CHALLENGE => Exes and Ohs
'''
    Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

    Examples input/output:

    XO("ooxx") => true
    XO("xooxx") => false
    XO("ooxXm") => true
    XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    XO("zzoo") => false
'''

# Method 1 => Status Quo
def xo(s):
    return True if s.lower().count('x') == s.lower().count('o') else False


# Method 2 => Simplifying Method 1
def x_o(s):
    return s.lower().count('x') == s.lower().count('o')


# Test Cases
string_1 = 'ooxx'
string_2 = 'xxxxxoooxooo'
string_3 = 'zpzpzpp'
string_4 = 'xELCxxbkJpxxhxxAxmxxxfoGooooxrxxxdoQoNox'

# Method 1 Testing
print(xo(string_1) == True)
print(xo(string_2) == True)
print(xo(string_3) == True)
print(xo(string_4) == False)

# Method 2 Testing
print(x_o(string_1) == True)
print(x_o(string_2) == True)
print(x_o(string_3) == True)
print(x_o(string_4) == False)
