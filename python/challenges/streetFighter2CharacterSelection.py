'''
    CHALLENGE => Street Fighter 2 - Character Selection

    Short Intro

    Some of you might remember spending afternoons playing Street Fighter 2 in some Arcade back in the 90s
    or emulating it nowadays with the numerous emulators for retro consoles.

    Can you solve this kata? Suuure-You-Can!

    UPDATE: a new kata's harder version is available here:
    (https://www.codewars.com/kata/street-fighter-2-character-selection-part-2/python)

    The Kata

    Selection Grid Layout in text:

    | Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
    | Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |

    Input:
        - [ ] the list of game characters in a 2x6 grid;
        - [ ] the initial position of the selection cursor (top-left is (0,0));
        - [ ] a list of moves of the selection cursor (which are up, down, left, right);

    Output
        - [ ] the list of characters who have been hovered by the selection cursor after all the moves
        (ordered and with repetition, all the ones after a move, wether successful or not, see tests);

    Rules
        - [ ] Selection cursor is circular horizontally but not vertically!
        - [ ] As you might remember from the game, the selection cursor rotates horizontally but not vertically;
        that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost
        (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.
        - [ ] Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located
        (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).

    Test
        - [ ]For this easy version the fighters grid layout and the initial position will always be the same in all tests,
        only the list of moves change.
        - [ ] Notice: changing some of the input data might not help you.

    Examples

    1.

    fighters = [
        ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
        ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
    ]
    initial_position = (0,0)
    moves = ['up', 'left', 'right', 'left', 'left']
    then I should get:

    ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
    as the characters I've been hovering with the selection cursor during my moves. Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.

    2.

    fighters = [
        ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
        ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
    ]
    initial_position = (0,0)
    moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
    Result:

    ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']
'''

# Method 1 => Status Quo
def street_fighter_selection(fighters, initial_position, moves):
    positions = [initial_position]
    for move in moves:
        y = positions[-1][0]
        x = positions[-1][1]
        if move == 'up':
            position = (0, x)
        elif move == 'down':
            position = (1, x)
        elif move == 'left':
            position = (y, x - 1) if x != 0 else (y, (len(fighters[y]) - 1))
        elif move == 'right':
            position = (y, x + 1) if x != (len(fighters[y]) - 1) else (y, 0)
        positions.append(position)
    positions.pop(0)
    return [fighters[position[0]][position[1]] for position in positions]


# Method 2 => Using A 'Move' Dict
MOVES = {
    "up": (-1, 0),
    "down": (1, 0),
    "right": (0, 1),
    "left": (0, -1)
}

def streetFighterSelection(fighters, initial_position, moves):
    y, x = initial_position
    fighter_options = []
    for move in moves:
        dy, dx = MOVES[move]
        y += dy
        if not 0 <= y < len(fighters):
            y -= dy
        x = (x + dx) % len(fighters[y])
        fighter_options.append(fighters[y][x])
    return fighter_options


# Test Cases
fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
    ]
initial_position = (0,0)
moves_1 = ['up', 'left', 'right', 'left', 'left']
moves_2 = [] # No movement
moves_3 = [
    'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left'
    ] # left 8 times
moves_4 = [
    'up', 'left', 'left', 'left', 'left', 'left', 'left', 'down',
    'right', 'right', 'right', 'right', 'right', 'right'
    ] # all characters
moves_5 = [
    'down', 'right', 'up', 'left', 'down', 'right', 'up', 'left'
    ] # counter-clockwise twice

solution_1 = ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
solution_2 = []
solution_3 = ['Vega', 'Balrog', 'Guile', 'Blanka', 'E.Honda', 'Ryu', 'Vega', 'Balrog']
solution_4 = [
    'Ryu', 'Vega', 'Balrog', 'Guile', 'Blanka', 'E.Honda', 'Ryu',
    'Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison', 'Ken'
    ]
solution_5 = ['Ken', 'Chun Li', 'E.Honda', 'Ryu', 'Ken', 'Chun Li', 'E.Honda', 'Ryu']

# Method 1 Testing
print(street_fighter_selection(fighters, initial_position, moves_1) == solution_1)
print(street_fighter_selection(fighters, initial_position, moves_2) == solution_2)
print(street_fighter_selection(fighters, initial_position, moves_3) == solution_3)
print(street_fighter_selection(fighters, initial_position, moves_4) == solution_4)
print(street_fighter_selection(fighters, initial_position, moves_5) == solution_5)

# Method 2 Testing
print(streetFighterSelection(fighters, initial_position, moves_1) == solution_1)
print(streetFighterSelection(fighters, initial_position, moves_2) == solution_2)
print(streetFighterSelection(fighters, initial_position, moves_3) == solution_3)
print(streetFighterSelection(fighters, initial_position, moves_4) == solution_4)
print(streetFighterSelection(fighters, initial_position, moves_5) == solution_5)
