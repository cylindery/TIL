# 스택 (Stack)

먼저 들어온 데이터가 나중에 나가는(선입후출, Last In First Out)의 자료 구조

**입구와 출구가 동일한 형태**로 스택을 시각화할 수 있으며, 바로 넣었다가 거꾸로 정렬된 데이터를 꺼내쓰고 싶을 때 유용함.  
스택은 다양한 알고리즘에서 자주 사용되는 기초 자료 구조.

스택은 완전히 꽉 차 있으면 Overflow, 완전히 비어 있으면 Underflow 상태가 된다.

## 기능 (Operation)

|  메서드   |                       연산                       | 시간 복잡도 |
| :-------: | :----------------------------------------------: | :---------: |
|  push()   |     새로운 데이터를 맨 위에 하나 더 쌓아올림     |    O(1)     |
|   pop()   | 스택에서 가장 위에 있는 데이터를 가져오면서 지움 |    O(1)     |
|  peek()   |          스택의 가장 위의 데이터를 반환          |    O(1)     |
| isEmpty() |        스택에 데이터가 있는지 없는지 확인        |    O(1)     |

## 자바에서의 스택

### 스택 구현 예제

```java
import java.util.*;

public class Main {
    
    public static void main(String[] args) [
        Stack<Integer> s = new Stack<>();
        
        //삽입(5) - 삽입(2) - 삽입(3) - 삽입(7) - 삭제() - 삽입(1) - 삽입(4) - 삭제()
        s.push(5);
        s.push(2);
        s.push(3);
        s.push(7);
        s.pop();
        s.push(1);
        s.push(4);
        s.pop();
        
        //스택의 최상단 원소부터 출력
        while (!s.empty()) {
            System.out.println(s.peek() + " ");
            s.pop();
        }
    ]
}
```

```
1 3 2 5
```

## 출처

- [(이코테 2021 강의 몰아보기) 3. DFS & BFS - YouTube](https://www.youtube.com/watch?v=7C9RgOcvkvo&list=PLRx0vPvlEmdAghTr5mXQxGpHjWqSz0dgC&index=3)
- [스택(Stack) (수정 2019-05-14) : 네이버 블로그](https://blog.naver.com/kks227/220781557098)
