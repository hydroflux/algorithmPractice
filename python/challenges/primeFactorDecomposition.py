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
    
    if n > 0:
        prime_factors.append((n, f'({n})'))

    prime_factors.sort()
    return ('').join(factor[1] for factor in prime_factors)


# Test Cases
n1 = 100
n2 = 7775460

solution_1 = '(1)(2**2)(5**2)'
solution_2 = '(2**2)(3**3)(5)(7)(11**2)(17)'

# Method 1 Testing
print(prime_factors(n1) == solution_1)
print(prime_factors(n2) == solution_2)

