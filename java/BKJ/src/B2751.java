import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
 
public class B2751 {
	public static void main(String[] args) throws IOException {
    
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder(); // �ð� �Ƴ��� ���� �� ���� ���
        
		// ���밪 1,000,000 ���� �۰ų� ���� �� => -1,000,000 ~ +1,000,000
		boolean[] arr = new boolean[2000001]; // �ߺ� ������ bool => ī����
        
		int N = Integer.parseInt(br.readLine());
        
		for(int i = 0; i < N; i++) { // �Է� ���� �� �� ����
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