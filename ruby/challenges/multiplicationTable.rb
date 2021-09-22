# CHALLENGE => Multiplication Table
=begin
    Your task, is to create NxN multiplication table, of size provided in parameter.

    For example, when given size is 3:

    1 2 3
    2 4 6
    3 6 9
    for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
=end

# Method 1 => Status Quo
def multiplication_table size, row=1, table_array=[]
    while size >= row
        for value in 1..size
            table_array.push(value * row)
        end
        row += 1
    end
    table_array.each_slice(size).to_a
end

# Method 2 => Mapping Over the Range & Creating Stepped Range Values
def multiplication_table_2 size
    (1..size).map { 
        | value | ( value..size * value ).step( value )
                                         .to_a
    }
end

# ".step" iterats over teh range, passing each nth element to the block


# Method 3 => Using a Nested Map
def multiplication_table_3 size
    (1..size).map { | i | (1..size).map { | j | i * j } }
end


# Test Cases
solution_1 = [[1, 2], [2, 4]]
solution_2 = [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
solution_3 = [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]
solution_4 = [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [3, 6, 9, 12, 15], [4, 8, 12, 16, 20], [5, 10, 15, 20, 25]]

# Method 1 Testing
p multiplication_table(2) == solution_1
p multiplication_table(3) == solution_2
p multiplication_table(4) == solution_3
p multiplication_table(5) == solution_4

# Method 2 Testing
p multiplication_table_2(2) == solution_1
p multiplication_table_2(3) == solution_2
p multiplication_table_2(4) == solution_3
p multiplication_table_2(5) == solution_4

# Method 3 Testing
p multiplication_table_3(2) == solution_1
p multiplication_table_3(3) == solution_2
p multiplication_table_3(4) == solution_3
p multiplication_table_3(5) == solution_4