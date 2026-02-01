def check_number(a):
    if a % 2 == 0:
        return print('짝수')
    else:
        return print('홀수')


# check_number(4)

def num02():
    numbers = [3, 17, 9, 24, 5]

    a = 0

    for i in numbers:
        if i > a:
            a = i

    return a


print(num02())
