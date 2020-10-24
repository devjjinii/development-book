// function Person(){}
// var Person = new Function();


function Person(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}  // person 이라는 객체 생성

/***
 * Person {
 *  -prototype
 * 
 * }
 * 
 * < - >
 * 
 * Person's prototype {
 *  -constructor
 *  -sum
 * }
 */

// 동시에 객체가 하나 더 생김 (서로 연관)
// Person's prototype

Person.prototype.sum = function() {}
const choi = new Person('choi', '26', 'soccer')

/**
 * choi
 * {
 *  __proto__
 *  name
 *  age
 *  hobby
 * }
 * __proto__ 로 prototype에 접근 가능
 */

 console.log(choi.name)
 choi.sum()  // __proto__ 를 통해 prototype 의 sum을 찾음