## 생성자에 매개변수가 많다면 빌더를 고려하라

#### - 생성자나 정적 팩터리가 처리해야 할 매개변수가 많다면 `빌더 패턴`을 선택!!

* 자바 빈즈 패턴
    * 매개변수가 없는 생성자로 객체를 만든 후, setter 메서드를 통해 매개변수의 값을 설정
```java
public class Person {
    private String name;
    private Integer age;

    public Person() {}

    // setter
    public void setName(String name) { 
        this.name = name;
    }
    
    ////// ... 
}

Person person = new Person();
person.setName("Jin");
/// .....
```
  * 장점 
    * 코드가 읽기 쉬움.
  * 단점
    * 객체 하나를 만들기 위해, 여러개의 (set)메서드를 호출해야함.
    * 클래스를 불변으로 만들 수 없음.
---
* 빌더 패턴
    * 필수 매개변수만으로 생성자를 호출해 빌더 객체를 얻음.
```java
public class Person {
    private final String name;
    private final Integer age;
    private final Strin hobby;

    public static class Builder {
        // 필수 매개변수 (final)
        private final String name;
        private final String age;

        // 선택 매개변수
        private String hobby;

        public Builder(String name, String age) {
            this.name = name;
            this.age = age;
        }

        public Builder hobby(String hobby) {
            this.hobby = hobby;
            return this;
        }

        public Person(Builder builder) {
            name = builder.name;
            age = builder.age;
            hobby = builder.hobby;
        } 
    }
}

Person person = new Person.Builder("Jin", 26)
                        .hobby("coding")
                        .build();
```
  * 장점
    * 가독성과 사용성이 높아짐(유연성)
    * 클래스는 불변임.
    * 빌더의 세터 메서드들은 자신을 반환하기 때문에 연쇄적으로 호출 가능. 
    * 계층적으로 설계된 클래스와 쓰기 좋음.
  * 단점
    * 빌더를 만들어야 함.   
--- 
* 불변 클래스 (immutable class)
    * 인스턴스가 한번 생성되면 그 값을 변경할 수 없는 클래스
