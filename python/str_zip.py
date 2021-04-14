def solution(s):
    pattern_area = 1  # 패턴 범위
    hub = {0:1000} # 압축 크기 저장소

    # START
    while(pattern_area <= len(s)):
        start = 0 # 시작 지점
        stack = 0  # 중복 스택
        ex_str = "" # 임시 문자열
        pattern = s[0:pattern_area] # 현재 패턴

        # START
        while(True):
            end = start + pattern_area # 끝 지점

            if start > len(s): # 시작점이 문자열을 넘으면 => 끝까지 패턴 조사했을 경우
                ex_str += s[start-pattern_area:]
                break

            if pattern == s[start:end]: # 패턴과 다음 패턴 범위의 내용이 같다면
                stack += 1 # 중복 +1
            else: # 패턴 내용이 다르면
                ex_str += (str(stack) if stack > 1 else "") + str(pattern) # 1은 생략하고 중복한 만큼 숫자 + 패턴
                stack = 1 # 중복 0
                pattern = s[start:end]
                if min(hub.values()) < len(ex_str): # 최소값보다 값이 크면 그냥 무시(종료)
                    break

            start += pattern_area # 패턴 범위만큼 전진
        # END

        hub[pattern_area] = len(ex_str) # 압축된 길이 넣기
        pattern_area += 1
    # END
    answer = min(hub.values()) # 정답

    return answer


s = input()

print(solution(s))