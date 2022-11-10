# 리스트 (List)

데이터들이 일련의 순서대로, 그리고 중복이 허용되며 모여있는 추상적 자료형

리스트의 키워드는 두 가지. 데이터가 연속한 **순서**대로 저장된다는 것과 **중복** 저장을 허용한다는 것.  
데이터가 연속되어 있어 중간에 비어있는 데이터가 없고, 리스트의 인덱스는 '몇 번째 데이터인가' 정도의 의미만을 가진다.

### 기능 (Operation)

1. 처음, 끝, 중간에 엘리먼트를 추가/삭제
2. 리스트에 데이터가 있는지 체크
3. 리스트 내의 모든 데이터에 접근

### 자바에서의 리스트

#### 구현

<img src="./assets/java-collection.png" width="70%">

자바는 리스트 인터페이스를 크게 네 가지로 구현한다.

- ArrayList
    - **인덱스 조회**가 빨라, 데이터 접근이 많을수록 유리
- LinkedList
    - **데이터 추가/삭제**가 많다면 유리
- Vector
    - ArrayList와 유사. **동기화** 지원

- Stack
    - **후입선출**. Vector 상속

#### 리스트 구현 객체 생성

```java
// 방법 1
ArrayList<T> arraylist =new ArrayList<>();
LinkedList<T> linkedlist =new LinkedList<>();
Vector<T> vector =new Vector<>();
Stack<T> stack = new Stack<>();

// 방법 2
List<T> arraylist = new ArrayList<>();
List<T> linkedlist = new LinkedList<>();
List<T> vector = new Vector<>();
List<T> stack = new Stack<>();

// Stack은 Vector를 상속하기 때문에 아래와 같이 생성 가능
Vector<T> stack = new Stack<>();
```

`T`는 객체의 타입을 의미. Integer, String, Double 등과 같은 Wrapper Class부터 사용자 정의 객체까지 사용 가능.  
e.g. `LinkedList<Integer> list = new LinkedList<>();`  
한편, Primitive 타입은 넣을 수 없다.

#### 리스트 인터페이스의 대표적인 메서드

|           메서드           | 리턴 타입 |                             설명                             |
| :------------------------: | :-------: | :----------------------------------------------------------: |
|          add(E e)          |  boolean  |                        엘리먼트 추가                         |
|      remove(Object o)      |  boolean  |            지정한 객체와 같은 첫 번째 객체를 삭제            |
|     contains(Object o)     |  boolean  | 지정한 객체가 컬렉션에 있는지 확인  <br />있을 경우 true, 없을 경우 false 반환 |
|           size()           |    int    |            현재 컬렉션에 있는 엘리먼트 개수 반환             |
|       get(int index)       |     E     |                지정된 위치에 저장된 원소 반환                |
| set(int index, E elements) |     E     |       지정된 위치의 엘리먼트를 지정된 엘리먼트로 바꿈        |
|         isEmpty()          |  boolean  |   현재 컬렉션에 엘리먼트가 없다면 true, 있다면 false 반환    |
|      equals(Object o)      |  boolean  |                  지정된 객체와 같은지 비교                   |
|     indexOf(Object o)      |    int    | 지정된 객체가 있는 첫 번째 엘리먼트의 위치를 반환  <br />없을 경우 -1 반환 |
|          clear()           |   void    |                      모든 엘리먼트 제거                      |

## ArrayList

ArrayList는 내부적으로 배열을 이용해 리스트를 구현함

흔히 사용하는 Primitive 타입 배열(e.g. int[])과 유사한 형태라고 본다.  
장점으로는 배열을 이용하기 때문에 **인덱스 접근이 빠름**.  
배열처럼 물리적으로 연속된 Memory Address를 사용한다.

반면 단점으로는 **데이터의 추가/삭제가 느리다**.

데이터를 추가/삭제하면, 해당 데이터 이후의 모든 데이터를 한칸씩 뒤로 밀거나 앞으로 당긴다.  
또한 자바의 배열은 크기가 고정돼있어, 데이터를 추가할 때 내부적으로 크기가 꽉 차면 기존의 배열 대비 2배 큰 배열을 새로 만들어 기존 데이터를 모두 복사하여 부하가 발생한다.

## LinkedList

LinkedList는 엘리먼트와 엘리먼트 간의 연결을 이용해서 리스트를 구현함

**Node**라고 하는 데이터, 주소로 이루어진 클래스를 만들어 연결하는 것이 핵심.  
노드는 이전의 노드와 다음 노드로, 즉 객체끼리 연결되어 있어 엘리먼트를 검색하는 과정도 이처럼 하나씩 물어물어 간다.  
이 때문에 Memory Address도 ArrayList와 달리 흩어져있다.

이러한 노드의 성격 때문에 데이터의 **검색은 성능이 떨어진다**.

반면 **데이터를 추가/삭제**하는 경우, 노드 간의 연결을 새로 이어주거나 끊으면 되기 때문에 **성능이 좋다**.

## 출처

- [리스트 (List) - Data Structure (자료구조)](https://opentutorials.org/module/1335/8636)
- [리스트(List), 배열(Array), 연결 .. : 네이버블로그](https://blog.naver.com/kks227/220781402507)
- [[자료구조 알고리즘] Linked List 개념 - YouTube](https://www.youtube.com/watch?v=DzGnME1jIwY)
- [Java - Collection과 Map의 종류(List, Set, Map)](https://memostack.tistory.com/234)
- [자바 [JAVA] - 자바 컬렉션 프레임워크 (Java Collections Framework)](https://st-lab.tistory.com/142)
