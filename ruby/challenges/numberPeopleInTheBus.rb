# CHALLENGE => Number of People in the Bus
=begin
    There is a bus moving in the city, and it takes and drop some people in each bus stop.

    You are provided with a list (or array) of integer arrays (or tuples).
    Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

    Your task is to return number of people who are still in the bus after the last bus station (after the last array).
    Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

    Take a look on the test cases.

    Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

    The second value in the first integer array is 0, since the bus is empty in the first bus stop.
=end

# METHOD 1 => Status Quo
def number_people bus_stops
    bus_stops.reduce(0){ | sum, exchange | sum + exchange[0] - exchange[1] } 
end

# METHOD 2 => map + reduce
def number_people_2 bus_stops
    bus_stops.map { |(on, off)| on - off }.reduce(:+)
end

# TESTING
array_1 = [[10, 0], [3, 5], [5, 8]]
array_2 = [[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]
array_3 = [[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]

puts number_people(array_1) == 5
puts number_people(array_2) == 17
puts number_people(array_3) == 21
puts number_people_2(array_1) == 5
puts number_people_2(array_2) == 17
puts number_people_2(array_3) == 21