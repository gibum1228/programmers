def solution(s):
    hub = {0:len(s)} # 압축 크기 저장소

    # START
    for i in range(1, len(s) + 1): # i == 패턴 범위
        start = 0
        stack = 0
        word = ""
        pattern = s[0:i]

        # START
        while(True):
            if start > len(s): # 시작점이 문자열을 넘으면
                word += s[start-i:]
                hub[i] = len(word)  # 압축 크기 저장 (2), (1) -> (2) 위치 변경시 시간 단축
                break

            if pattern == s[start:start+i]: # 패턴 일치하면 스택 쌓기
                stack += 1
            else:
                word += (str(stack) if stack > 1 else "") + str(pattern) # {중복 횟수+패턴}으로 압축
                stack = 1
                pattern = s[start:start+i] # 다음 패턴으로 넘기기
                if min(hub.values()) < len(word):  # 최소값보다 값이 크면 그냥 무시(종료)
                    break

            start += i # 시작점 변경
        # END

        # hub[i] = len(word) # 압축 크기 저장 (1)
    # END
    answer = min(hub.values()) # 정답

    return answer

# MAIN
s = input()

print(solution(s))