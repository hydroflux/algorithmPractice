'''
    CHALLENGE => Primes in Numbers

    Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

    "(p1**n1)(p2**n2)...(pk**nk)"
    with the p(i) in increasing order and n(i) empty if n(i) is 1.

    Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
'''

# Method 1 => Status Quo
def prime_factors(n, i=2):
    prime_factors=[]
    while i * i <= n:
        if n % i == 0:
            j = 1
            while n % i**j == 0:
                prime_factor = [i, j]
                j += 1
            if prime_factor == [i, 1]:
                prime_factors.append((i, f'({str(i)})'))
            else:
                prime_factors.append((i, f'({str(i)}**{str(j-1)})'))

            n //= int(prime_factor[0] ** prime_factor[1])
        i += 1
    
    if n > 1:
        prime_factors.append((n, f'({n})'))

    prime_factors.sort()
    return ('').join(factor[1] for factor in prime_factors)


# Method 2 => Using Python 'String Formatting' & Using Colons For While Statements
def primeFactors(n):
    i, j, p = 2, 0, []
    while n > 1:
        while n % i == 0: n, j = n/i, j + 1
        if j > 0: p.append([i, j])
        i, j = i + 1, 0
    return ''.join('(%d' %q[0] + ('**%d' %q[1]) * (q[1] > 1) + ')' for q in p)

# The '* (q[1] > 1)' is acting as a equivalency statement to add the second factor by multiplying the second factor
# 1 time if the statement is true

# Test Cases
n1 = 100
n2 = 7775460
n3 = 7919
n4 = 162
n5 = 35791357
n6 = 782611830
n7 = 925186

solution_1 = '(1)(2**2)(5**2)'
solution_2 = '(2**2)(3**3)(5)(7)(11**2)(17)'
solution_3 = '(7919)'
solution_4 = '(1)(2)(3**4)'
solution_5 = '(7)(5113051)'
solution_6 = '(2)(3**2)(5)(7**2)(11)(13)(17)(73)'
solution_7 = '(2)(19)(97)(251)'

# Method 1 Testing
print(prime_factors(n1) == solution_1)
print(prime_factors(n2) == solution_2)
print(prime_factors(n3) == solution_3)
print(prime_factors(n4) == solution_4)
print(prime_factors(n5) == solution_5)
print(prime_factors(n6) == solution_6)
print(prime_factors(n7) == solution_7)

# Method 2 Testing
print(primeFactors(n1) == solution_1)
print(primeFactors(n2) == solution_2)
print(primeFactors(n3) == solution_3)
print(primeFactors(n4) == solution_4)
print(primeFactors(n5) == solution_5)
print(primeFactors(n6) == solution_6)
print(primeFactors(n7) == solution_7)
