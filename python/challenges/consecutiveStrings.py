'''
    CHALLENGE => Consecutive Strings

    You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

    Examples:
    strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

    Concatenate the consecutive strings of strarr by 2, we get:

    treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
    folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
    trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
    blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
    abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

    Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
    The first that came is "folingtrashy" so 
    longest_consec(strarr, 2) should return "folingtrashy".

    In the same way:
    longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
    n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

    Note
    consecutive strings : follow one after another without an interruption
'''

# Method 1 => Status Quo
def longest_consec(array, k):
    if k < 1 or array == [] or k > len(array): return ''
    longest=[]
    if k > 1:
        for string in array[:-(k - 1)]:
            consecutive, j = string, 1
            while k > j: consecutive += array[array.index(string) + j]; j += 1
            longest.append(consecutive)
    else:
        return max(array, key=len)
    return max(longest, key=len)


# Method 2 => Single Line Using Range
def longestConsec(s, k):
    return max(["".join(s[i:i+k]) for i in range(len(s)-k+1)], key=len) if s and 0 < k <= len(s) else ""

# Test Cases
array_1 = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"]
array_2 = ["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"]
array_3 = ["zone", "abigail", "theta", "form", "libe", "zas"]
array_4 = ['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz']
array_5 = ['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz']

k1 = 2
k2 = 2
k3 = -2
k4 = 3
k5 = 15

solution_1 = 'folingtrashy'
solution_2 = 'wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck'
solution_3 = ''
solution_4 = 'ixoyx3452zzzzzzzzzzzz'
solution_5 = ''

# Method 1 Testing
print(longest_consec(array_1, k1) == solution_1)
print(longest_consec(array_2, k2) == solution_2)
print(longest_consec(array_3, k3) == solution_3)
print(longest_consec(array_4, k4) == solution_4)
print(longest_consec(array_5, k5) == solution_5)

# Method 2 Testing
print(longestConsec(array_1, k1) == solution_1)
print(longestConsec(array_2, k2) == solution_2)
print(longestConsec(array_3, k3) == solution_3)
print(longestConsec(array_4, k4) == solution_4)
print(longestConsec(array_5, k5) == solution_5)
