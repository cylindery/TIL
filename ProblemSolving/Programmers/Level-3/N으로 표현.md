# N으로 표현

> https://school.programmers.co.kr/learn/courses/30/lessons/42895

### 내 코드

```java
import java.util.ArrayList;
import java.util.HashSet;

class Solution {
    public int solution(int N, int number) {
        int answer = -1;
        ArrayList<HashSet<Integer>> list = new ArrayList<>();

        for (int i = 0; i < 9; i++) {
            list.add(new HashSet<>());
        }

        // N만을 사용하여 만들 수 있는 수 set에 초기화
        for (int i = 1; i < 9; i++) {
            list.get(i).add(Integer.parseInt(String.valueOf(N).repeat(i)));
        }

        // N을 사용한 횟수에 따라 만들 수 있는 모든 수 set에 삽입
        for (int i = 2; i < 9; i++) {
            for (int j = 1; j < i; j++) {
                for (Integer preNum : list.get(j)) {
                    for (Integer postNum : list.get(i - j)) {
                        list.get(i).add(preNum + postNum);
                        list.get(i).add(preNum - postNum);
                        list.get(i).add(preNum * postNum);
                        if (preNum != 0 && postNum != 0) {
                            list.get(i).add(preNum / postNum);
                        }
                    }
                }
            }
        }

        // 만든 set에서 number가 존재하면 그 인덱스가 최솟값
        for (HashSet<Integer> set : list) {
            if (set.contains(number)) {
                answer = list.indexOf(set);
                break;
            }
        }

        return answer;
    }
}
```

### 참고한 코드

```java
import java.util.HashSet;

class Solution {
    public int solution(int N, int number) {
        int answer = -1;
        HashSet<Integer>[] setArray = new HashSet[9];

        // N만을 사용하여 만들 수 있는 수 set에 초기화
        for (int i = 1; i < 9; i++) {
            setArray[i] = new HashSet<>();
            setArray[i].add(Integer.parseInt(String.valueOf(N).repeat(i)));
        }

        // N을 사용한 횟수에 따라 만들 수 있는 모든 수 set에 삽입
        for (int i = 2; i < 9; i++) {
            for (int j = 1; j < i; j++) {
                for (Integer preNum : setArray[j]) {
                    for (Integer postNum : setArray[i - j]) {
                        setArray[i].add(preNum + postNum);
                        setArray[i].add(preNum - postNum);
                        setArray[i].add(preNum * postNum);
                        if (postNum != 0) {
                            setArray[i].add(preNum / postNum);
                        }
                    }
                }
            }
        }

        // 만든 set에서 number가 존재하면 그 인덱스가 최솟값
        for (int i = 1; i < 9; i++) {
            if (setArray[i].contains(number)) {
                answer = i;
                break;
            }
        }

        return answer;
    }
}
```

### 피드백

- N을 몇 개 사용했을 때 만들 수 있는 수의 규칙을 dp로 발견하여, 그 수를 모두 찾는 문제.
  - 처음엔 문제를 이해하기도 어려웠다. 그러다가 사칙연산이라는 기준에 의해 어떤 수든 +-*/ 를 이용해 4가지 케이스로 분화된다는 사실을 찾음.
    - 예를 들어 N=5, number=12일 때 12라는 수는 이전에 (7 + 5), (17 - 5), (60 / 5) 이런 식으로 만들어질 수밖에 없다. 곱하기는 만들 수 없고.
  - 그러므로 N을 1개 사용했을 때, 2개 사용했을 때, ... 8개 사용했을 때 만들 수 있는 각각의 수를 set에 저장하여 앞에서부터 number가 속해있는 set이 바로 N 사용횟수의 최솟값.
    - 이 아이디어를 떠올린다면 구현은 크게 어렵지 않았다. 하지만 아이디어를 떠올리기가 굉장히 어려웠던 문제.
- `String.repeat(int count)`: String 값을 count 만큼 반복.
- `ArrayList.indexOf(Object o)`: ArrayList의 값 o가 몇 번째 인덱스에 있는지.

### 출처

- https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html#repeat(int)
- https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ArrayList.html#indexOf(java.lang.Object)
- https://school.programmers.co.kr/learn/courses/30/lessons/42895/solution_groups?language=java