## equals를 재정의하려거든 hashCode도 재정의하라

* equals를 재정의한 클래스 모두에서 hashCode도 재정의해야 함.
    * 그렇지 않으면 제대로 동작하지 않음.
      * 일반 규약(Object의 API문서에 기술된 일반 규약)을 어기게 되어 클래스의 인스턴스를 HashMap, HashSet 같은 컬렉션의 원소로 사용할 때 문제가 발생.
* 논리적으로 같은 객체는 같은 해시코드를 반환해야함.
    * equals는 물리적으로 다른 두 객체를 논리적으로는 같다고 할 수 있지만, 
    Object의 hashCode 메서드는 둘이 다르다고 판단하여 서로 다른 값을 반환.
    
* ex) hashCode 메서드
    ```java
    // 전형적인 hashCode 메서드
    // item 10 의 PhoneNumber 인스턴스의 핵심 필드 3개를 사용해 간단한 계산 수행
    @Override
    public int hashCode() {
        int result = Short.hashCode(areaCode);
        result = 31 * result + Short.hashCode(prefix);
        result = 31 * result + Short.hashCode(lineNum);
        return result;
    }

    // 한 줄 hashCode
    @Override
    public int hashCode() {
        return Objects.hash(lineNum, prefix, areaCode);
    }

    // 스레드 안정성 고려한 hashCode
    private int hashCode;

    @Override
    public int hashCode() {
        int result = hashCode;
        if(result == 0) {
            result = Short.hashCode(areaCode);
            result = 31 * result + Short.hashCode(prefix);
            result = 31 * result + Short.hashCode(lineNum);
            hashCode = result;
        }
        return result;
    } // 성능을 위해 해시코드를 계산할때 핵심 필드를 생략해서는 안됨.
    ```