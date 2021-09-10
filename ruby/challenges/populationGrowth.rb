# Challenge => Growth of a Population
=begin
  In a small town the population is p0 = 1000 at the beginning of a year.
  The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.
  
  How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

  At the end of the first year there will be: 
  1000 + 1000 * 0.02 + 50 => 1070 inhabitants

  At the end of the 2nd year there will be: 
  1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

  At the end of the 3rd year there will be:
  1141 + 1141 * 0.02 + 50 => 1213

  It will need 3 entire years.
  More generally given parameters:

  p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

  the function nb_year should return n number of entire years needed to get a population greater or equal to p.

  aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

  Examples:
  nb_year(1500, 5, 100, 5000) -> 15
  nb_year(1500000, 2.5, 10000, 2000000) -> 10
  
  Note:
  Don't forget to convert the percent parameter as a percentage in the body of your function:
  if the parameter percent is 2 you have to convert it to 0.02.
=end

# Method 1 => Status Quo
def nb_year p0, percent, augment, p1
  count = 0
  percent *= 0.01

  while p0 < p1
    p0 = (p0 + ( p0 * percent ).floor + augment)
    count += 1
  end

  count
end

# Method 2 => Ternary Return with Recursion
def nb_year_2 p0, percent, augment, p1, years=0
  p0 >= p1 ?
    years :
    nb_year_2( p0 + ( percent / 100.0 * p0 ).to_i + augment,
               percent,
               augment,
               p1,
               years + 1)
end

# Cool idea to add a new argument (Method 2), didn't consider that as an option

# Testing
p0_1 = 1500000
percent_1 = 0.0
augment_1 = 10000
p1_1 = 2000000

p0_2 = 1000
percent_2 = 2.0
augment_2 = 50
p1_2 = 1214

p0_3 = 9395761
percent_3 = 9.54
augment_3 = 46978
p1_3 = 11227903

p0_4 = 12719548
percent_4 = 1.62
augment_4 = 63597
p1_4 = 18252487

solution_1 = 50
solution_2 = 4
solution_3 = 2
solution_4 = 18

# Method 1 Testing
p nb_year( p0_1, percent_1, augment_1, p1_1 ) == solution_1
p nb_year( p0_2, percent_2, augment_2, p1_2 ) == solution_2
p nb_year( p0_3, percent_3, augment_3, p1_3 ) == solution_3
p nb_year( p0_4, percent_4, augment_4, p1_4 ) == solution_4

# Method 2 Testing
p nb_year_2( p0_1, percent_1, augment_1, p1_1 ) == solution_1
p nb_year_2( p0_2, percent_2, augment_2, p1_2 ) == solution_2
p nb_year_2( p0_3, percent_3, augment_3, p1_3 ) == solution_3
p nb_year_2( p0_4, percent_4, augment_4, p1_4 ) == solution_4