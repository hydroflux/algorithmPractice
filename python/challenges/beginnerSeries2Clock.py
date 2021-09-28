'''
    # CHALLENGE => Beginner Series #2 Clock

    Clock shows h hours, m minutes and s seconds after midnight.

    Your task is to write a function which returns the time since midnight in milliseconds.

    Example:
    h = 0
    m = 1
    s = 1

    result = 61000
    Input constraints:

    0 <= h <= 23
    0 <= m <= 59
    0 <= s <= 59
'''

# Method 1 => Status Quo
def past(h, m, s):
    return ((h*60 + m)*60 + s)*1000


# Test Cases
h1 = 0
m1 = 1
s1 = 1


# Method 1 Testing
print(past(h1, m1, s1) == 61000)
