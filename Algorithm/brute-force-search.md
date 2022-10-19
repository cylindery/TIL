# 브루트 포스 (Brute Force Search)

브루트 포스는 주어진 문제에 대해 **가능한 모든 경우의 수**를 시도하면서, 그 중 요구되는 조건에 맞는 결과를 도출하는 알고리즘 기법.

완전 탐색 알고리즘의 기법 중 하나로, 간단하고 무식해 보이지만 알고리즘의 가장 기초적인 방식.  
경우의 수만 제대로 설정한다면 정확도는 100%를 자랑하지만 그만큼 자원의 소모값이 무척 크다는 단점.

한편 브루트 포스만 가지고 풀 수 있는 문제는 많지 않다.  
다만 어떤 문제든 부분적으로 브루트 포스 알고리즘을 활용하는 경우가 많기 때문에, 원하는 방식의 브루트 포스 구현을 기계적으로 익혀두는 것이 필요하다.

## 문제 적용 팁

1. 주어진 문제를 순차적으로 탐색할 수 있도록 선형 구조화
2. 선형 구조화된 문제 공간을 정답이 도출될 때까지 탐색
3. 도출된 정답들을 정리

## 예시

### 문제 <시각>

> 정수 N이 입력되면 00시 00분 00초부터 N시 59분 59초까지의 모든 시각 중에서 3이 하나라도 포함되는 모든 경우의 수를 구하는 프로그램을 작성하세요. 예를 들어 1을 입력했을 때 다음은 3이 하나라도 포함되어 있으므로 세어야 하는 시각입니다.
>
> > 00시 00분 03초  
> > 00시 13분 40초
>
> 반면에 다음은 3이 하나도 포함되어 있지 않으므로 세면 안 되는 시각입니다.
>
> > 00시 02분 55초  
> > 01시 27분 45초

### 문제 해결 아이디어

가능한 모든 시각의 경우를 하나씩 모두 세서 풀 수 있다.  
하루는 86,400초이므로, 00시 00분 00초부터 23시 59분 59초까지의 모든 경우의 수는 86,400가지.  
$24 * 60 * 60 = 86400$  
따라서 단순히 시각을 1씩 증가시키면서 3이 포함되어 있는지 확인하자.

### 코드

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int h = sc.nextInt(); //h 입력
        int cnt = 0;
        for (int i = 0; i <= h; i++) {
            for (int j = 0; j < 60; j++) {
                for (int k = 0; k < 60; k++) {
                    if (check(i, j, k)) cnt++; //매 시각안에 '3'이 포함되어 있으면 카운트 증가
                }
            }
        }
        
        System.out.println(cnt);
    }
    
    /* 특정한 시각 안에 '3'이 포함되어 있는지 여부 */
    public static boolean check(int h, int m, int s) {
        if (h % 10 == 3 || m / 10 == 3 || m % 10 == 3 || s / 10 == 3 || s % 10 == 3) {
            return true;
        }
        return false;
    }
}
```

## 출처

- [6 Introduction to Backtracking - Brute Force Approach - YouTube](https://www.youtube.com/watch?v=DKCbsiDBN6c)
- [브루트 포스 완전 탐색 알고리즘 3분만에 이해하기 - YouTube](https://www.youtube.com/watch?v=ZNa9-86uVEA)
- [(이코테 2021 강의 몰아보기) 2. 그리디 & 구현 - YouTube](https://www.youtube.com/watch?v=2zjoKjt97vQ&list=PLRx0vPvlEmdAghTr5mXQxGpHjWqSz0dgC&index=2)
- [완전 탐색(Brute-force Search) : 네이버 블로그](https://blog.naver.com/kks227/220769870195)
