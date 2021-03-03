## toString을 항상 재정의하라

* toString을 구현할 때 반환값의 포맷을 문서화할지 정함.
    * 단점: 포맷을 한번 명시하면 그 포맷에 얽매이게 됨. 하지만 의도는 명확히 밝혀야함.
    ```java
    /*
    * 문자열 표현 반환 "XXX-YYY-ZZZZ" 12글자로 구성
    * 각각의 대문자는 10진수 숫자 하나를 나타냄.
    * ex) 123 > 0123   : 값이 너무 작아 자릿수를 채울 수 없다면 앞에서부터 0을 채움.
    */
    @Override
    public String toString() {
        return String.format("%03d-%03d-%04d", areaCode, prefix, lineNum);
    }

    /*
    * 상세 형식이 정해지지 않아 향후 변경 가능성 있음.
    */
    @Override
    public String toString() { ... }

    // 포맷 명시 여부와 상관없이 toString이 반환한 값에 포함된 정보를 얻어올 수 있는
    // API를 제공하자.
    ```
* 위의 예제 중 첫번째 메서드처럼 명확하고 유용한 정보를 읽기 좋은 형태로 반환해야 함. 