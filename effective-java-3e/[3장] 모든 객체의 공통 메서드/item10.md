## equals는 일반 규약을 지켜 재정의하라

* 꼭 필요한 경우가 아니면 equals 메서드를 재정의 하지 않음!!
    * 재정의해야할 경우는 그 클래스의 핵심 필드를 모두 규약을 지켜 비교함.
* 재정의 해야하는 경우
    * 객체를 논리적으로 비교확인 할때, 상의 클래스의 equals가 논리적으로 비교하도록 재정의되지 않았을 때 (?)
        * String, Integer
    * 두 값의 객체를 equals로 비교할 경우, 객체가 같은지보다는 `값`이 같은지를 비교하는 경우(이 경우가 많음).


* equals 메서드를 재정의 할 때 일반 규약을 따라야 함.
    * 반사성 : 객체는 자기 자신과 같아야함.
    * `대치성` : 두 객체는 서로 동치여부에 똑같이 답해야함.
    * `추이성` : 첫 번째 객체와 두 번째 객체가 같고, 두 번째 객체와 세 번째 객체가 같다면 첫 번째 객체와 세 번째 객체는 같아야함.
    * `일관성` : 두 객체가 같다면 계속 같아야함.
    * Notnull : 모든 객체가 null 이면 안됨.

* equals 메서드 구현 방법
    1. 연산자를 사용해 입력이 자기 자신의 참조인지 확인함.
    2. instanceof 연산자로 입력이 올바른 타입인지 확인함.
    3. 입력은 올바른 타입으로 형변환함. (2번에서 걸러짐.)
    4. 입력 객체와 자기 자신의 대응되는 핵심필드들이 모두 일치하는지 검사함.
        ```java
        // 기본타입 필드는 == 연산자로 비교
        // float 와 double 은 아래와 같이 비교
        Float.compare(float, float)
        Double.compare(Double, Double)
        ``` 

* 전형적인 equals 메서드의 예
```java
public final class PhoneNumber {
    private final short areaCode, prefix, lineNum;

    public PhoneNumber(int areaCode, int prefix, int lineNum) {
        this.areaCode = rangeCheck(areaCode, 999, "지역코드");
        this.prefix = rangeCheck(prefix, 999, "prefix");
        this.lineNum = rangeCheck(lineNum, 9999, "번호");
    }

    private static shore rangeCheck(int val, int max, String arg) {
        if( val<0 || val>max) {
            throw new IllegalArgumentException(arg + ": " +val);
        }
        return (short) val;
    }

    @Override       // 입력 타입은 반드시 Object여야 함.
    public boolean equals(Object o) {
        if(o == this) {
            return true;
        }
        if(!(o instanceof PhoneNumber)) {
            return false;
        }
        PhoneNumber pn = (PhoneNumber)o;
        return pn.lineNum == lineNum && pn.prefix   
                       == prefix && pn.areaCode == areaCode;
    }

    //,,,,,,
}
```

