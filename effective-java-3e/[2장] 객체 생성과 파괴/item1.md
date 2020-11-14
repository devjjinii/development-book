## 생성자 대신 정적 팩토리 메서드를 고려하라

* 클래스 : 객체를 만들어 내기 위한 틀(설계도), 변수와 메서드들의 집합
* 객체 : 클래스에서 설계된 대로 구현할 대상, `클래스의 인스턴스`
* 인스턴스 : 틀(클래스)을 바탕으로 구현된 실체
    * 인스턴스는 객체에 포함되어 있음
```java
// 클래스
public class Person { 
    String name;
    int age; // 변수

    public void hello() {....;} // 메서드

};

public class Main {
    public static void main(String[] args) {
        Person jin; // 객체

        // 인스턴스
        jin = new Person(); // jin은 Person 클래스의 인스턴스(메모리 할당)
    }
}
```
* 클래스의 인스턴스를 얻는 방법은 public 생성자가 기본적임. 하지만 생성자가 아닌 정적 팩토리 메서드로도 인스턴스를 
얻을 수 있음. ex) valueOf
```java
class Person {
    String name;
    
    // 생성자
    Person(String name) {
        super();
        this.name = name;
    }
    String getName() {
        return name;
    }

    // 정적 팩토리 메서드
    static Person nameOf(String name) {
        return new Person(name);
    }
}

public class Main {
    public static void main(String[] args) {
        //Person person = new Person("Jin");
        Person person = Person.nameOf("dev"); // nameOf을 통해 매개변수 dev가 name의 속성인지 앎

        System.out.println(person.getName());
    }
}
```
* 장점
    * 이름을 가질 수 있음.
    * 호출될 때마다 인스턴스를 새로 생성하지 않아도 됨.
    * 반환 타입의 하위 타입 객체를 반환할 수 있음.
    * 입력 매개변수에 따라 매번 다른 클래스의 객체를 반환 가능.
    * 정적 팰토리 메서드를 작성하는 시점에는 반환할 객체의 클래스가 존재하지 않아도 됨.

* 단점
    * 상속을 하려면 public 이나 protected 생성자가 필요한데, 정적 팩토리 메서드만 이용하면
    하위 클래스를 만들 수 없음. (`super()`)
    * 프로그래머가 찾기 어려움. (명확하게 드러나지 않음)

* Naming Convention
    * from : 하나의 매개변수를 받아서 인스턴스를 생성
    * of : 여러개의 매개변수를 받아서 인스턴스를 생성
    * instance | getInstance : 인스턴스를 생성, 같은 인스턴스임을 보장하지 않음
    * create | newInstance : 새로운 인스턴스를 생성
    * get[Type] : 다른 타입의 인스턴스를 생성
    * new[Type] : 다른 타입의 새로운 인스턴스를 생성