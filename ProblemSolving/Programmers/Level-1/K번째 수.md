# K번째 수

> https://school.programmers.co.kr/learn/courses/30/lessons/42748

### 내 코드 1

```java
import java.util.ArrayList;
import java.util.Arrays;

class Solution {
    public int[] solution(int[] array, int[][] commands) {
        ArrayList<Integer> list = new ArrayList<>();

        for (int[] command : commands) {
            int start = command[0] - 1;
            int end = command[1] - 1;
            int target = command[2] - 1;

            int[] temp = new int[end - start + 1];
            for (int i = 0; i < temp.length; i++) {
                temp[i] = array[i + start];
            }

            Arrays.sort(temp);

            list.add(temp[target]);
        }

        int[] answer = new int[list.size()];
        for (int i = 0; i < answer.length; i++) {
            answer[i] = list.get(i);
        }

        return answer;
    }
}
```

### 내 코드 2

```java
import java.util.ArrayList;
import java.util.Arrays;

class Solution {
    public int[] solution(int[] array, int[][] commands) {
        ArrayList<Integer> answer = new ArrayList<>();

        for (int[] command : commands) {
            int start = command[0] - 1;
            int end = command[1] - 1;
            int target = command[2] - 1;

            int[] temp = new int[end - start + 1];
            for (int i = 0; i < temp.length; i++) {
                temp[i] = array[i + start];
            }

            Arrays.sort(temp);

            answer.add(temp[target]);
        }

        return answer.stream()
                .mapToInt(Integer::intValue)
                .toArray();
    }
}
```

### 참고한 코드

```java
import java.util.Arrays;

class Solution {
    public int[] solution(int[] array, int[][] commands) {
        int[] answer = new int[commands.length];

        for (int i = 0; i < commands.length; i++) {
            int[] temp = Arrays.copyOfRange(array, commands[i][0] - 1, commands[i][1]);

            Arrays.sort(temp);

            answer[i] = temp[commands[i][2] - 1];
        }

        return answer;
    }
}


```

### 피드백

- 배열의 특정 구간을 오름차순으로 정렬하는 간단한 문제. ArrayList에 특정 구간의 원소를 정렬한 뒤 추가하는 방식을 사용하여 풀었다.
    - 람다식에 익숙해지고자 Integer 타입의 ArrayList를 stream으로 int 타입의 배열로 리턴해보았다.
        - ArrayList는 Integer로 선언했고, answer는 int 타입이므로, stream()으로 리스트를 돌린 뒤에 mapToInt()로 타입을 변환한 IntStream 객체를,
          toArray()로 int[] 변환.
- 다른 방법으로 Arrays.copyOfRange() 메서드를 배웠다.
    - copyOfRange(int[] original, int from, int to): 배열 original에서, from번째 인덱스부터 to번째 인덱스 전까지 복사.
    - copyOf(int[] original, int newLength): 배열 original에서, 0번째 인덱스부터 newLength 크기만큼 복사.

### 출처

- https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Arrays.html#copyOfRange(int%5B%5D,int,int)
- https://velog.io/@deannn/Java-int%ED%98%95-ArrayList-%EB%B0%B0%EC%97%B4-%EB%B3%80%ED%99%98