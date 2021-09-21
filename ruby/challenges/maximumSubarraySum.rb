# CHALLENGE => Maximum Subarray Sum
=begin
  The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

  maxSequence [-2, 1, -3, 4, -1, 2, 1, -5, 4]
  -- should be 6: [4, -1, 2, 1]
  Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.
  If the list is made up of only negative numbers, return 0 instead.

  Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
=end

# Method 1 => Status Quo
def max_sequence array, maximum_subarray=0, current_max=0
  for element in array
    current_max = ( element > current_max + element ) ? element : current_max + element
    maximum_subarray = current_max if current_max > maximum_subarray
  end
  maximum_subarray
end

# Method 2 => Using 'any?', 'positive?', 'each_cons', and 'max' Methods
def max_sequence_2 array
  return 0 unless array.length > 0 && array.any?(&:positive?)
  (1..(array.length))
  .to_a  # converts the range back to an array
  .map {
    | index | array.each_cons( index )
                  .map { | consecutive_array | consecutive_array.sum }  # sums each consecutive array
                  .max  # maximizes the consectutive arrays to a single array of maximized numbers
   }
  .max  # maximizes the consecutive arrays max
end

# 'any?' searches for any match
# '&:positive?' is matching for any positive numbers in the array
# 'to_a' creates an array
# 'each_cons' iterates the given block for each array of consecutive <n> elements--if no block is given ,returns an enumerator

# Test Cases
array_1 = []
array_2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
array_3 = [
  0, 12, 16, 20, 7, -12, -8, 15, 8, 8, -17, -20, 3, -1, 20, -11, 16, -18, 23, 14, 2, -1, 8, 5, -7, -18, -9, -9, -24, -22, -2, -3,
  -18, 6, 9, -21, 9, -23, 18, 25, 17, 12, -22, -8, -25, 22, -25, -25, -23, -25, -19, -5, 8, -21, 21, -3, 18, 1, 17, 15, -16, -13, -20, 15
]
array_4 = [
  13, -24, 4, -2, 15, -17, -20, -25, 10, -24, 0, 2, -7, 16, -1, 12, -17, -8, 19, -18, 21, 23, -18, 4, -12, -10, -4, 21, 22, 19, 7,
  9, -15, 3, 12, 17, -3, 13, -17, -3, -11, -21, 10, -11, -11, 9, -15, -10, 19, -7, -25, -13, -17, -18, -18, 18, -24, 9, 20, -12, -24, -18,
  6, -14, 19, 17, 9, 10, -3, 25, -3, 7, -22, -1, -18, 14, -8, -15, -7, -18
]

solution_1 = 0
solution_2 = 6
solution_3 = 89
solution_4 = 112

# Method 1 Testing
p max_sequence(array_1) == solution_1
p max_sequence(array_2) == solution_2
p max_sequence(array_3) == solution_3
p max_sequence(array_4) == solution_4

# Method 2 Testing
p max_sequence_2(array_1) == solution_1
p max_sequence_2(array_2) == solution_2
p max_sequence_2(array_3) == solution_3
p max_sequence_2(array_4) == solution_4