# CHALLENGE => Categorize New Member
'''
    The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

    To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

    Input
    Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

    Note for F#: The input will be of (int list list) which is a List<List>

    Example Input
    [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
    Output
    Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

    Example Output
    ["Open", "Open", "Senior", "Open", "Open", "Senior"]
'''

# Method 1 => Status Quo
def open_or_senior(data):
    membership = []
    for member in data:
        if member[0] >= 55 and member[1] > 7:
            membership.append("Senior")
        else:
            membership.append("Open")
    return membership


# Method 2 => Single Line Return with a Tuple to Break Up The Data
def openOrSenior(data):
    return ["Senior" if age >= 55 and handicap >= 8 else "Open" for (age, handicap) in data]


# Test Cases
data_1 = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
data_2 = [(89, 15), (42, 24), (79, 17), (30, 15), (89, 22), (83, 24), (13, 18), (35, 5)]
data_3 = [(61, 9), (18, 19), (68, 7), (29, 4), (24, 23), (48, 2), (31, 15), (56, -2)]
data_4 = [(25, 18), (21, 18), (33, 16), (60, 0), (35, 0), (87, 24), (78, 26)]

solution_1 = ['Open', 'Open', 'Senior', 'Open', 'Open', 'Senior']
solution_2 = ['Senior', 'Open', 'Senior', 'Open', 'Senior', 'Senior', 'Open', 'Open']
solution_3 = ['Senior', 'Open', 'Open', 'Open', 'Open', 'Open', 'Open', 'Open']
solution_4 = ['Open', 'Open', 'Open', 'Open', 'Open', 'Senior', 'Senior']

# Method 1 Testing
print(open_or_senior(data_1) == solution_1)
print(open_or_senior(data_2) == solution_2)
print(open_or_senior(data_3) == solution_3)
print(open_or_senior(data_4) == solution_4)

# Method 2 Testing
print(openOrSenior(data_1) == solution_1)
print(openOrSenior(data_2) == solution_2)
print(openOrSenior(data_3) == solution_3)
print(openOrSenior(data_4) == solution_4)
