'''
    CHALLENGE => Rot13

    ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

    Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

    Please note that using encode is considered cheating.
'''

# Method 1 => Status Quo
def rot13(message, cypher=''):
    for letter in message:
        if not letter.isalpha():
            cypher += letter
        elif letter.lower() == letter:
            cypher += chr(ord(letter) + 13) if ord(letter) + 13 < 123 else chr(ord(letter) - 13)
        else:
            cypher += (chr(ord(letter.lower()) + 13) if ord(letter.lower()) + 13 < 123 else chr(ord(letter.lower()) - 13)).upper()
    return cypher


# Test Cases
message_1 = 'test'
message_2 = '7zz0UPBsU3QXkYyS'
message_3 = '5XxbmGbGzX9TPGRl'
message_4 = 'aZyMK2eqQ5mJMIrM'

solution_1 = 'grfg'
solution_2 = '7mm0HCOfH3DKxLlF'
solution_3 = '5KkozToTmK9GCTEy'
solution_4 = 'nMlZX2rdD5zWZVeZ'


# Method 1 Testing
print(rot13(message_1) == solution_1)
print(rot13(message_2) == solution_2)
print(rot13(message_3) == solution_3)
print(rot13(message_4) == solution_4)
