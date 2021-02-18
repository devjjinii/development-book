## 다 쓴 객체 참조를 해제하라

* 해당 참조를 다 썼을 때 null 처리를 함.
* 스택 클래스에서는 각 원소의 참조가 더 이상 필요 없어지는 시점 : 스택에서 꺼내질 때
    * 스택은 자기 메모리를 직접 관리.
    ```java
    public Object pop() {
        if(size == 0) {
            throw new EmptyStackException();
        }
        Object result = elements[--size];
        elements[size] = null; // 다 쓴 참조 해제
        return result;
    } // 가비지 컬렉터에게 비활성 영역이라는 것을 알려야함.
    ```
    * null 처리 이점
        * null 처리한 참조를 실수로 사용할 경우 NullPointerException 오류 던짐.
* 객체 참조를 null 처리하는 일은 예외적인 경우여야 함.
    * 좋은 방법 : 참조를 담은 변수를 유효 범위(scope) 밖으로 밀어내는 것.    

* 자기 메모리를 직접 관리하는 클래스라면 메모리 누수에 주의. >> 스택
    * 원소를 다 사용한 후 그 원소가 참조한 객체들을 null 처리.
    