# H-Index

> https://school.programmers.co.kr/learn/courses/30/lessons/42747

### 내 코드

```java
import java.util.Arrays;

class Solution {
    public int solution(int[] citations) {
        int answer = citations.length;

        Arrays.sort(citations);
        for (int h = answer; h >= 0; h--) {
            int count = 0;
            int index = -1;

            for (int i = 0; i < citations.length; i++) {
                if (citations[i] >= h) {
                    count++;
                } else {
                    index = i;
                }
            }

            if (count >= h) {
                if (index == -1) {
                    answer = h;
                    break;
                } else {
                    if (citations[index] <= h) {
                        answer = h;
                        break;
                    }
                }
            }
        }

        return answer;
    }
}
```

### 피드백

- 배열의 정렬을 활용해 배열값에 몇가지 조건을 적용하여 값을 찾는 문제.
    - 배열을 오름차순 정렬한 뒤, 최댓값인 배열의 길이부터 시작해 조건들을 모두 만족하는 최초의 값이 H-Index 값.
    - 다른 풀이로 배열의 원소값과 배열의 길이 값을 비교하며 교차하는 변화가 교차하는 순간을 이용한 풀이는 {0, 1, 1, 1, 3, 5, 6} 같은 경우의 반례가 있다.