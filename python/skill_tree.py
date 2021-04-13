def solution(skill, skill_trees):
    arr = []
    nums = 0

    for i in range(len(skill)):
        arr.append(skill[0:i+1])
    print("arr >> ", arr)
    for i in skill_trees:
        brr =""
        print("i >> ", i)
        for j in i:
            print("j >> ", j)
            if j in skill:
                brr += j
        print("brr >> ", brr)

        if str(brr) == "":
            nums += 1
        if brr in arr:
            nums += 1

    return nums

skill = input("원하는 스킬트리 입력 >> ")
skill_trees = []
n = int(input("스킬트리 갯수 입력 >> "))
for i in range(n):
    skill_trees.append(input("스킬트리 >>"))

print(solution(skill, skill_trees))