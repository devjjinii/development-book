## 자원을 직접 명시하지 말고 의존 객체 주입을 사용하라

* DI : Dependency Injection 
    * 의존성 주입 : 외부에서 의존 객체를 생성하여 넘겨주는 것.
        * 클래스의 유연성과 재사용성
        * 테스트의 용이성
    ```java
    public class Programmer {
        private Coffee coffee;

        public Programmer(Coffee coffee) {
            this.coffee = coffee;
        }
    }

    public class Coffee {}

    ```