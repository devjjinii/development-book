## private 생성자나 열거 타입으로 싱글턴임을 보증하라

* 싱글턴 패턴
    * 단 하나의 인스턴스를 생성해 사용
      * 고정된 메모리 영역을 얻으면서 한번의 new로 인스턴스를 사용하기 때문에 메모리 낭비를 방지할 수 있음
    * private constructor 을 가지고 static method 를 사용

* 싱글턴을 만드는 방식
    * public static final 필드 방식의 싱글턴
       * 다른 생성자나 정적 팩터리 메서드가 없음(싱글턴 보증)
    ```java
    public class Elvis {
        // instance
        public static final Elvis INSTANCE = new Elvis();
        private Elvis() {...} // private construct

        public void method(){...}
    }
    ```
     
    * 정적 팩터리 방식의 싱글턴
      * getInstance 는 항상 같은 객체의 참조를 반환(싱글턴 보증)
      * 제 2의 Elvis 인스턴스는 만들어지지 않음.
      * 간결함
    ```java
    public class Elvis {
        private static final Elvis INSTANCE = new Elvis();
        private Elvis() {...} // new 를 통한 객체 생성 불가능
        public static Elvis getInstance() {return INSTANCE;} // getInstance 를 통해 해당 인스턴스를 얻음

        public void method(){...}
    }
    ```
  
    * 열거 타입 방식의 싱글턴 - 바람직
      * 더 간결함(직렬화 되어있음)
      * 해당 클래스가 다른 클래스를 상속해야 한다면 사용할 수 없음.
    ```java
    public enum Elvis {
        INSTANCE;

        public void method(){...}
    }
    ```
    