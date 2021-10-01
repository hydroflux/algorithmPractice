'''
    CHALLENGE => Count the smiley faces!

    Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

    Rules for a smiling face:

    Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
    Every smiling face must have a smiling mouth that should be marked with either ) or D
    No additional characters are allowed except for those mentioned.

    Valid smiley face examples: :) :D ;-D :~)
    Invalid smiley faces: ;( :> :} :]

    Example
    countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
    countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
    countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
    Note
    In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

'''

import re

# Method 1 => Status Quo
def count_smileys(array):
    count = 0
    for face in array:
        if face[0] in [':', ';'] and face[-1] in [')', 'D']:
            if len(face) == 3 and face[1] in ['-', '~'] or len(face) == 2:
                count += 1
    return count


# Method 2 => Using the Regular Expressions Package
def countSmileys(array):
    return len(list(re.findall(r"[:;][-~]?[)D]", " ".join(array))))


# 're.findall' looks for matches using regular expressions => 'r' starts the 'format block'??;
# matches to look for contained and separated by brackets ([]);
# and the '?' after a bracket makes it an optional placeholder

# Test Cases
array_1 = [':D',':~)',';~D',':)']
array_2 = [';]', ':[', ';*', ':$', ';-D']
array_3 = [':-D', ':-(', ';D', ':-(', ':(', ':-D', ';(', ';D', ';-D']
array_4 = [':(', ':D', ';-(', ':D', ';D', ';o(', ';-(', ';D', ':oD', ';-D', ':o(', ':(', ';-D', ':D']

solution_1 = 4
solution_2 = 1
solution_3 = 5
solution_4 = 7

# Method 1 Testing
print(count_smileys(array_1) == solution_1)
print(count_smileys(array_2) == solution_2)
print(count_smileys(array_3) == solution_3)
print(count_smileys(array_4) == solution_4)

# Method 2 Testing
print(countSmileys(array_1) == solution_1)
print(countSmileys(array_2) == solution_2)
print(countSmileys(array_3) == solution_3)
print(countSmileys(array_4) == solution_4)
