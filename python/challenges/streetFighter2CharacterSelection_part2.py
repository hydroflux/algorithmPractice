'''
    CHALLENGE => Street Fighter 2 - Character Selection - Part 2

    This is the rightful continuation to the easier Kata and some rules are the same with few substantial alterations.
    Easier Kata = https://www.codewars.com/kata/5853213063adbd1b9b0000be

    As you may see, we now have 16 characters on 3 rows.
    
    You might think: let's make an array of 3 arrays! But that's not enough.

    Empty space
    The first character of the first row (Ryu) is not aligned with the first of the second row (Balrog)
    but with the second (Ken) and the same goes with the other side; therefore we need to introduce something new,
    like an offset: the Empty Space.

    The empty space, represented as empty string "", will allow us to keep the grid aligned and rectangular,
    with spaces that won't be selectable.
    
    In this case we need 2 empty spaces
    (3 rows x 6 columns = 18 slots, 18 slots - 16 characters = 2 empty spaces).
    
    Like this:

    |        | Ryu    | E.Honda  | Blanka  | Guile   |         |
    | Balrog | Ken    | Chun Li  | Zangief | Dhalsim | Sagat   |
    | Vega   | T.Hawk | Fei Long | Deejay  | Cammy   | M.Bison |

    The moves of the selection cursor are the same as before:
        1. Rotate horizontally but stop vertically.
        2. When you find empty spaces (1 or more) you need to skip them if you approach them horizontally and
            get to the next selectable slot with the next fighter on the left or right;
            and if you approach them vertically you need to just stop and stay where you are.

    Example: if you are on Ryu and move left, you must get to Guile; if you are on Balrog and move up, you must stay on Balrog.

    Notice: I might put empty spaces right in the middle and the rectangular grids can be any size, not only 3x6, deal with this too.

    What's New
    Let's resume what are the new issues in this harder version of the Kata:
        - [ ] The initial position might be any non-empty slot in the grid (given as input).
        - [ ] The characters grid (also given as input) might have any rectangular layout, not only 3 rows.
        - [ ] The grid might contain empty spaces, both on the borders or right in the middle.

    Input
        - [ ] Fighters grid
        - [ ] Initial position
        - [ ] List of moves
        - [ ] The third input parameter is still the list of moves (all valid ones: left, right, up or down).

    Output (Same as before)
        - [ ] The list of characters that have been hovered by the selection cursor after each move, successful or not.

    Hopefully test cases will complete my explanation.
'''

# Method 1 => Status Quo
MOVES = {
    "up": (-1, 0),
    "down": (1, 0),
    "right": (0, 1),
    "left": (0, -1)
}

def super_street_fighter_selection(fighters, initial_position, moves):
    fighter_options = []
    y, x = initial_position
    for move in moves:
        dy, dx = MOVES[move]
        if not y + dy >= len(fighters):
            if not fighters[y + dy][x] == '':
                y += dy
        x = (x + dx) % len(fighters[y])
        while fighters[y][x] == '': x = (x + dx) % len(fighters[y])
        fighter_options.append(fighters[y][x])
    return fighter_options


# Test Cases
fighters_1 = [
	[       "",    "Ryu",  "E.Honda",  "Blanka",   "Guile", ""       ],
	[ "Balrog",    "Ken",  "Chun Li", "Zangief", "Dhalsim", "Sagat"  ],
	[   "Vega", "T.Hawk", "Fei Long",  "Deejay",   "Cammy", "M.Bison"]
    ]
initial_position_1 = (0, 0)
moves_1 =  []  # no movement
initial_position_2 = (1, 3)
moves_2 =  ["left"]*8  # rotate horizontally
initial_position_3 = (0, 2)
moves_3 =  ["right"]*8  # rotate horizontally with empty spaces
initial_position_4 = (1, 0)
moves_4 = ["down"]*2 + ["up"]*3 + ["down"]*2  # move vertically with empty spaces

fighters_5 = [
	[        "",     "Ryu",  "E.Honda",  "Cammy" ],
	[  "Balrog",     "Ken",  "Chun Li",       "" ],
	[    "Vega",        "", "Fei Long", "Balrog",],
    [  "Blanka",   "Guile",         "", "Chun Li"],
    [ "M.Bison", "Zangief",  "Dhalsim", "Sagat"  ],
    [  "Deejay",   "Cammy",         "", "T.Hawk" ]
    ]
initial_position_5 = (0, 3)
moves_5 = ["left"]*2 + ["down"] + ["right"]*4 + ["down"] + \
    ["left"]*4 + ["down"] + ["right"]*2 + ["down"] + \
    ["right"]*3 + ["down"]+["left"]*3+["down"]+["left"]*3

solution_1 = []
solution_2 = [
    'Chun Li', 'Ken', 'Balrog', 'Sagat', 'Dhalsim', 'Zangief', 'Chun Li', 'Ken'
    ]
solution_3 = [
    'Blanka', 'Guile', 'Ryu', 'E.Honda', 'Blanka', 'Guile', 'Ryu', 'E.Honda'
    ]
solution_4 = [
    'Vega', 'Vega', 'Balrog', 'Balrog', 'Balrog', 'Vega', 'Vega'
]
solution_5 = [
    'E.Honda', 'Ryu', 'Ken', 'Chun Li', 'Balrog', 'Ken', 'Chun Li', 'Fei Long',
    'Vega', 'Balrog', 'Fei Long', 'Vega', 'Blanka', 'Guile', 'Chun Li', 'Sagat',
    'M.Bison', 'Zangief', 'Dhalsim', 'Dhalsim', 'Zangief', 'M.Bison', 'Sagat',
    'T.Hawk', 'Cammy', 'Deejay', 'T.Hawk'
    ]

# Method 1 Testing
print(super_street_fighter_selection(fighters_1, initial_position_1, moves_1) == solution_1)
print(super_street_fighter_selection(fighters_1, initial_position_2, moves_2) == solution_2)
print(super_street_fighter_selection(fighters_1, initial_position_3, moves_3) == solution_3)
print(super_street_fighter_selection(fighters_1, initial_position_4, moves_4) == solution_4)
print(super_street_fighter_selection(fighters_5, initial_position_5, moves_5) == solution_5)
