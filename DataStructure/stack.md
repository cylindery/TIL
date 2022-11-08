# 스택 (Stack)

**입구와 출구가 동일한 형태**로 스택을 시각화할 수 있다.

e.g. 박스 쌓기로 기억

스택은 다양한 알고리즘에서 자주 사용되는 기초 자료 구조. 



stack = 쌓다. 

먼저 들어온 데이터가 나중에 나가는 형식(선입후출)의 자료 구조. LIFO(Last In First Out). 바로 넣었다가 거꾸로 정렬된 데이터를 꺼내쓰고 싶을 때 유용함. 

스택의 네 가지 기능.

pop() : 맨 마지막에 넣은 데이터를 가져오면서 지우는 것.

push() : 새로운 데이터를 맨 위에 하나 더 쌓아올림.

peek() : 맨 마지막 데이터를 보는 것.

isEmpty() : 스택에 데이터가 있는지 없는지 확인.

### 스택 동작 예시

스택은 삽입과 삭제 두 연산으로 구성.

stack-1.png

### 스택 구현 예제

list 자료형 사용. 가장 오른쪽에 데이터를 삽입하는 push() 와 오른쪽의 데이터를 삭제하는 pop() 메서드. + 자바에서 스택에서 최상단 원소를 출력하고자 할 때 peek() 메서드.
append, pop 메서드의 시간복잡도는 상수시간, O(1)이라 활용하기 좋음.

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

```java
1 3 2 5
```

## 문제 적용 팁



## 예시



## 출처

- [(이코테 2021 강의 몰아보기) 3. DFS & BFS - YouTube](https://www.youtube.com/watch?v=7C9RgOcvkvo&list=PLRx0vPvlEmdAghTr5mXQxGpHjWqSz0dgC&index=3)
- [[자료구조 알고리즘] Stack 구현하기 in Java - YouTube](https://www.youtube.com/watch?v=whVUYv0Leg0)
- [[자료구조 알고리즘] Stack 정렬하기 - YouTube](https://www.youtube.com/watch?v=6-tsS9aBfzY)
- [스택(Stack) (수정 2019-05-14) : 네이버 블로그](https://blog.naver.com/kks227/220781557098)
