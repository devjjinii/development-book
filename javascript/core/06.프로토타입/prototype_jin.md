## 프로토타입

### <span style="color:green">프로토타입의 개념</span>
* 자신을 통해 만들어질 객체의 원형 ( 부모 객체 )
* [[Prototype]]의 값은 Prototype(프로토타입) 객체이며 `__proto__` 로 접근할 수 있다. 
    * [[Prototype]] : 객체의 입장에서 자신의 부모 역할을 하는 프로토타입 객체를 가리킨다.
* `__proto__`는 객체의 프로퍼티가 아니라 Object.prototype의 접근자 프로퍼티이다.
* `__proto__` 프로퍼티에 접근하면 내부적으로 Object.getPrototypeOf가 호출되어 프로토타입 객체를 반환한다.
* 실무에서는 `__proto__` 보다는 Object.getPrototypeOf(), Object.create() 를 이용하자.
  * 2015년에 Object.setPrototypeOf와 Object.getPrototypeOf가 표준에 추가되면서 `__proto__`와 동일한 기능을 수행한다. 
    * Object.create(proto, [descriptors]) : `[[Prototype]]`이 proto를 참조하는 빈 객체를 만든다.
    * Object.getPrototypeOf(obj) : obj의 프로토타입(`[[Prototype]]`)을 반환한다.
    * Object.setPrototypeOf(obj, proto) : obj의 `[[Prototype]]` 이 proto 가 되도록 설정한다.
 
* constructor 프로퍼티
    * 프로토타입 객체는 constructor 프로퍼티를 갖는다.
        * constructor 프로퍼티는 객체의 입장에서 자신을 생성한 객체를 가리킨다.
        ```js
        function Person(name) {
            this.name = name;
        } // person 이라는 객체를 생성하면 
          // person's prototype 이라는 객체가 하나 더 생긴다.
          // person 객체 안의 prototype 과
          // person's prototype 안의 constructor 는 서로 연관관계이다.
          // 이 때 constructor 은 Person을 가리킨다.

        const choi = new Person('Choi');
         // Choi라는 객체를 생성시 __proto__ 가 생성된다.
         // 여기서 __proto__ 로 person's prototype 의 constructor와 연결된다.

        console.log(Person.prototype.constructor === Person);
        console.log(choi.constructor === Person);
        ```
        <img width="558" alt="스크린샷 2020-10-29 오후 10 09 51" src="https://user-images.githubusercontent.com/53853730/97577986-7e53af80-1a33-11eb-9690-a37763c6dc05.png">

* EX) 
  ```js
  //https://ko.javascript.info/prototype-methods
  
  let person = {
      hobby: true
  };

  let dev = Object.create(person);
  console.log(dev.hobby); // true
  console.log(Object.getPrototypeOf(dev) === person); // true

  Object.setPrototypeOf(dev, {}); // dev 의 프로토타입을 {} 로 변경

  let dev2 = Object.create(person, {
    color : {
      value : true
    }
  });

  console.log(dev2.color); // true
  console.log(dev2.hobby); // true
  ```

### <span style="color:green">프로토타입 체인</span>
  ```js
  let log = console.log;

  let myObj = {}; // new Object()
  log(myObj.constructor); // function Object(){}
  log(myObj.__proto__ === myObj.constructor.prototype); // true


  function Dog() {};

  let jjinii = new Dog();
  log(jjinii.__proto__ === Dog.prototype); // true
  log(jjinii.__proto__.__proto__ === Object.prototype); // true
  log(Object.prototype.__proto__); // null

  // Prototype Chain
  function Animal() {}
  Object.setPrototypeOf(Dog.prototype, Animal.prototype); 
  log(jjinii.__proto__); // Dog{}
  log(jjinii.__proto__.__proto__); // Animal{}
  log(jjinii.__proto__.__proto__.__proto__); // {}
  log(jjinii.__proto__.__proto__.__proto__.__proto__); //null
  ```