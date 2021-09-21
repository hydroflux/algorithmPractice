# CHALLENGE => Title Case
=begin
  A string is considered to be in title case if each word in the string is either
    (a) capitalised (that is, only the first letter of the word is in upper case) or
    (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

  Write a function that will convert a string into title case, given an optional list of exceptions (minor words).
  The list of minor words will be given as a string with each word separated by a space.
  Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

  ###Arguments (Haskell)

  First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
  Second argument: the original string to be converted.
  ###Arguments (Other languages)

  First argument (required): the original string to be converted.
  Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
  ###Example

  title_case('a clash of KINGS', 'a an the of') # should return: 'A Clash of Kings'
  title_case('THE WIND IN THE WILLOWS', 'The In') # should return: 'The Wind in the Willows'
  title_case('the quick brown fox') # should return: 'The Quick Brown Fox'
=end

# Method 1 => Status Quo
def title_case title, minor_words
  title.split.each_with_index.map do | word, index | 
    if ( !minor_words.downcase.split.include? word.downcase ) || index == 0
      "#{word[0].upcase}#{word[1 , word.length ].downcase }"
    else
      word.downcase
    end
  end
    .join(' ')
end

# Testing
title_1 = 'a clash of KINGS'
title_2 = 'THE WIND IN THE WILLOWS'
title_3 = 'the quick brown fox'
title_4 = 'First a of in'

minor_words_1 = 'a an the of'
minor_words_2 = 'The In'
minor_words_3 = ''
minor_words_4 = 'an often into'

solution_1 = 'A Clash of Kings'
solution_2 = 'The Wind in the Willows'
solution_3 = 'The Quick Brown Fox'
solution_4 = 'First A Of In'

p title_case(title_1, minor_words_1) == solution_1
p title_case(title_2, minor_words_2) == solution_2
p title_case(title_3, minor_words_3) == solution_3
p title_case(title_4, minor_words_4) == solution_4