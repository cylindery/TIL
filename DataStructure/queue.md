# 큐 (Queue)

먼저 들어온 데이터가 먼저 나가는 형식(선입선출, First In First Out)의 자료구조

**입구와 출구가 모두 뚫려 있는 터널과 같은 형태**로 시각화할 수 있으며,



## 자바에서의 큐

### 큐 구현 예제

```java
import java.util.LinkedList;
import java.util.Queue;

public class Main {

    public static void main(String[] args) {
        Queue<Integer> q = new LinkedList<>();

        // 삽입(5) - 삽입(2) - 삽입(3) - 삽입(7) - 삭제() - 삽입(1) - 삽입 (4) - 삭제()
        q.offer(5);
        q.offer(2);
        q.offer(3);
        q.offer(7);
        q.poll();
        q.offer(1);
        q.offer(4);
        q.poll();

        // 먼저 들어온 원소부터 추출
        while (!q.isEmpty()) {
            System.out.print(q.poll() + " ");
        }
    }

}
```

```
3 7 1 4
```



## 출처

- [(이코테 2021 강의 몰아보기) 3. DFS & BFS - YouTube](https://www.youtube.com/watch?v=7C9RgOcvkvo&list=PLRx0vPvlEmdAghTr5mXQxGpHjWqSz0dgC&index=3)
- [큐(Queue), 덱(Dequeue) (수정:.. : 네이버블로그](https://blog.naver.com/kks227/220781851401)

