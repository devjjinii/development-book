## 클래스

* 클래스와 인스턴스
  * 클래스 : 변수 + 메서드(함수)
  ```js
  // 클래스 선언
  class Animal {
    // this는 클래스가 생성할 인스턴스, name은 클래스 필드
    constructor(name) { this.name = name; }

    // 메서드 사이에 , 넣지 않음
    sayHi() { console.log(`Hello ~ ${this.name}`); }
    method2(){...}
    method3(){...}
  }
  
  console.log(typeof Animal) // Animal => function

  // 인스턴스 생성
  // 인스턴스 === 프로토타입 객체 (?)
  const dog = new Animal('jjinii');
  dog.sayHi();

  // A instanceof B : A가 B의 인스턴스가 맞는지 true/false
  console.log(dog instanceof Animal); // true

  class Foo {}
  const foo = new Foo();

  console.log(Object.getPrototypeOf(foo).constructor === Foo); // true
  ```
  * constructor : 인스턴스를 생성하고 클래스 필드를 초기화하기 위한 메서드
    * 클래스 필드 : 클래스 내부의 캡슐화된 변수 (멤버 변수) // 클래스 바디에는 메소드만 선언 가능
    * 클래스 내에 한 개만 존재 가능

    ```js
    class Foo {
      name = ''; // SyntaxError
      constructor() {
          // 여기에 멤버변수 선언 가능
        
      }
    }    
    ```
    
* getter와 setter
```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

let animal = new Animal("jjinii");
console.log(animal.name);

// Animal.prototype에 getter와 setter가 생성
```
<img width="558" alt="스크린샷 2020-10-29 오후 10 26 02" src="https://user-images.githubusercontent.com/53853730/97579755-cbd11c00-1a35-11eb-813e-9db88bcb67cd.png">


* 클래스 상속
  * extends : 부모 클래스를 상속받는 자식클래스를 정의할때 사용
    * Object.setPrototypeOf 메소드를 사용하여 상속
  * super : 부모 클래스를 참조할때 또는 부모 클래스의 constructor를 호출할때 사용  
    ```js
    // 프로토타입 방식
    let Animal = {
      speak() {
        console.log(this.name + ':: Animal')
      }
    };

    class Dog{
      constructor(name) {
        this.name = name;
      }
      speak() {
        console.log(this.name + ':: Dog')
      }
    }

    Object.setPrototypeOf(Dog.prototype, Animal); // extends

    let dog = new Dog('jjinii');
    dog.speak(); // jjinii :: Dog
    ```
    ```js
    //https://www.youtube.com/watch?v=XoQKXDWbL1M
    let PersonC = class {
      constructor(name, id) {
        this.name = name;
        this.id = id;
      }

      getDetail() {
        return `${this.name} :: ${this.id}`;
      }

    };

    let jin = new PersonC("Jin",1);
    console.log(jin.getDetail(), jin.name);

    let EmployeeC = class extends PersonC { // 부모 클래스 상속
      constructor(name, id, salary) {
        super(name, id); // 부모 클래스(personC) 참조
        this.salary = salary;
      }

      employeeInfo() {  //EmployeeC의 프로토타입을 가지고 있음.
        return `${this.name} :: ${this.id} :: ${this.salary}`;
      }
    }

    let dev = new EmployeeC("Dev", 2, 1000);
    console.log(dev.employeeInfo());

    ```