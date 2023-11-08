def solution(number):
    # return sum(filter(lambda x: x%3==0 or x%5==0 ,list(range(1,number))))
    return sum([x for x in list(range(1,number)) if x%3==0 or x%5==0])
print(solution(10))