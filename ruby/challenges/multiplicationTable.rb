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

# Test Cases
size_1 = 3

# Method 1 Testing
solution_1 = [[1, 2, 3], [2, 4, 6], [3, 6, 9]]

p multiplication_table(size_1) == solution_1