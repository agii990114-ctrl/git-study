# def ex01(name,*args,):
#     return(args,name)

# print(ex01(1,2,3,4,5,"호호"))

# def ex02(**args):
#     return(args)

# print(ex02(a=3,b=5))

# def add(a,b):
#     return a+b,a*b

# result, result2 = add(3,5)
# print(result)


# def mySelf(man:int) :
#     return man

# print(mySelf("하하"))

# a =1 
# def b():
#     global a
#     a = a + 1

# print(b() , a)

# add = lambda a, b: a+b
# result = add(3,4)
# print(result)


# a = input("첫문장: ")
# b= input("두번째: ")
# result = a + b
# print(type(result),result, end="")

# for i in range(10):
#     print(i, end=" ")


# f = open("./새파일.txt", 'w')
# for i in range(10):
#     f.write(f'{i} line \n')
# f.close

f = open("./memo.json","r")
print(type(f))
arr = f
print(arr)
for line in f:
    print(line)
f.close()