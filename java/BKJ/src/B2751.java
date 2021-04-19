import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
 
public class B2751 {
	public static void main(String[] args) throws IOException {
    
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder(); // 시간 아끼기 위해 한 번에 출력
        
		// 절대값 1,000,000 보다 작거나 같은 수 => -1,000,000 ~ +1,000,000
		boolean[] arr = new boolean[2000001]; // 중복 없으니 bool => 카운팅
        
		int N = Integer.parseInt(br.readLine());
        
		for(int i = 0; i < N; i++) { // 입력 받은 수 값 변경
			arr[Integer.parseInt(br.readLine()) + 1000000] = true;
		}
 
		for(int i = 0; i < arr.length; i++) {
			if(arr[i]) {
				sb.append((i - 1000000)).append('\n');
			}
		}
		
		System.out.print(sb);
	}
}