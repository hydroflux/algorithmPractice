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

solution_1 = 'grfg'


# Method 1 Testing
print(rot13(message_1) == solution_1)
