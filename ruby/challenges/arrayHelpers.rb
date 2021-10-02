# Challenge => Array Helpers
=begin
    This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

    Explanation:

    square() must return a copy of the array, containing all values squared
    cube() must return a copy of the array, containing all values cubed
    average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
    sum() must return the sum of all array values
    even() must return an array of all even numbers
    odd() must return an array of all odd numbers
    Note: the original array must not be changed in any case!

    Example
    numbers = [1, 2, 3, 4, 5]

    numbers.square()  # must return [1, 4, 9, 16, 25]
    numbers.cube()    # must return [1, 8, 27, 64, 125]
    numbers.average() # must return 3
    numbers.sum()     # must return 15
    numbers.even()    # must return [2, 4]
    numbers.odd()     # must return [1, 3, 5]
=end

# Method 1 => Status Quo
class Array
    def square
        self.map{ | number | number ** 2 }
    end

    def cube
        self.map{ | number | number ** 3 }
    end

    def average
        self.reduce(:+) / self.length
    end

    def even
        self.select{ | number | number % 2 == 0 }
    end

    def odd
        self.select{ | number | number % 2 != 0 }
    end
end

# Test Cases
numbers_1 = [1, 2, 3, 4, 5]
numbers_2 = [97, 38, 25, 59, 10, 2, 86, 50, 65, 88, 54, 7, 32, 78, 14, 12, 48, 34, 7, 34]

square_1 = [1, 4, 9, 16, 25]
cube_1 = [1, 8, 27, 64, 125]
average_1 = 3
even_1 = [2, 4]
odd_1 = [1, 3, 5]
square_2 = [9409, 1444, 625, 3481, 100, 4, 7396, 2500, 4225, 7744, 2916, 49, 1024, 6084, 196, 144, 2304, 1156, 49, 1156]
cube_2 = [912673, 54872, 15625, 205379, 1000, 8, 636056, 125000, 274625, 681472, 157464, 343, 32768, 474552, 2744, 1728, 110592, 39304, 343, 39304]
average_2 = 42
even_2 = [38, 10, 2, 86, 50, 88, 54, 32, 78, 14, 12, 48, 34, 34]
odd_2 = [97, 25, 59, 65, 7, 7]

# Method 1 Testing
p numbers_1.square == square_1
p numbers_1.cube == cube_1
p numbers_1.average == average_1
p numbers_1.even == even_1
p numbers_1.odd == odd_1
p numbers_2.square == square_2
p numbers_2.cube == cube_2
p numbers_2.average == average_2
p numbers_2.even == even_2
p numbers_2.odd == odd_2