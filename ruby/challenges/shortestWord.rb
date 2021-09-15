# CHALLENGE => Shortest Word
=begin
  Simple, given a string of words, return the length of the shortest word(s).

  String will never be empty and you do not need to account for different data types.
=end

def find_short string
  string.split
        .reduce { | shortest, word | word.length < shortest.length ? word : shortest }
        .length
end