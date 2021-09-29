'''
    CHALLENGE => Primes in Numbers

    Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

    "(p1**n1)(p2**n2)...(pk**nk)"
    with the p(i) in increasing order and n(i) empty if n(i) is 1.

    Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
'''

# Method 1 => Status Quo
def prime_factors(n, i=2, prime_factors=[]):
    while i * i <= n:
        print(i)
        print(n % i)
        if n % i is 0:
            prime_factors.append([i, int(n/i)])
            n //= i
            n //= n/i
            print(n)
            print(i)
            print(prime_factors)
        i += 1
            


# Test Cases
n1 = 10
n2 = 7775460


# Method 1 Testing
print(prime_factors(n1))

