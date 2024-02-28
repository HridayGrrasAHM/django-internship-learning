# a = 10

# print(a)

# def add(a, b):
#     return a+b

# print(add(2, 3))


def primeChecker(isPrime):
    flag = True
    if isPrime == 1 or isPrime == 0:
        return f"Composite Numbers {isPrime}"
    for i in range(2, isPrime):
        if isPrime % i == 0:
            # print("Not prime")
            flag = False
            break

    if flag:
        # print("Prime", isPrime)
        return f"Prime {isPrime}"
