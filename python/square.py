import math

w, h = map(int, input().split()) # 8 12

gcd_num = math.gcd(w, h) # 2 * 3 으로 만들기 위해 최대공약수로 나누어야 함

split_w = w // gcd_num # 2
split_h = h // gcd_num # 3

cant_use_square = (h // split_h) * (split_w + split_h - 1) # 축소 시킨 도형의 갯수 * 못 쓰는 정사각형
total_square = w * h

can_use_square = total_square - cant_use_square

print(can_use_square)