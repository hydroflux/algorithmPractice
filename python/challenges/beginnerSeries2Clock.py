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

h2 = 1
m2 = 1
s2 = 1

h3 = 0
m3 = 0
s3 = 0

h4 = 20
m4 = 13
s4 = 38

solution_1 = 61000
solution_2 = 3661000
solution_3 = 0
solution_4 = 72818000


# Method 1 Testing
print(past(h1, m1, s1) == solution_1)
print(past(h2, m2, s2) == solution_2)
print(past(h3, m3, s3) == solution_3)
print(past(h4, m4, s4) == solution_4)
