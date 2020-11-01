// 참고
// https://gist.github.com/qodot/ecf8d90ce291196817f8cf6117036997
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator
// https://medium.com/@pks2974/javascript%EC%99%80-iterator-cdee90b11c0f
// https://poiemaweb.com/es6-generator
// https://infoscis.github.io/2018/01/31/ecmascript-6-iterators-and-generators/
// https://meetup.toast.com/posts/73


const iterable = new Object(); // 객체는 반드시 하나의 Symbol.iterator 만을 가질수 있다.

iterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

console.log([...iterable]); // 1 2 3
for(var value of iterable) {   // for of 를 이용해서 iterator의 값을 반복할 수 있다.
    console.log(value); // 1 2 3
}


// Javascript 에서 build-in object 중 iterable 를 가지고 있는 객체는 
// Array, TypedArray, String, Map, Set 가 있다.

///////////////////////////////////////////////////////////////////////////////////////////////////////
var iterator = '12'[Symbol.iterator]();
console.log(iterator.next()); // {value: "1", done: false} // next 메소드는 arguments 가 없다.
console.log(iterator.next()); // {value: "2", done: false}
console.log(iterator.next()); // {value: undefined, done: true}

// next 메소드의 반환자는 done: boolean 과 value: any 를 포함하는 object 를 반환해야 한다.
// next 메소드의 반복이 끝날때 done 은 true 를 반환해야 한다.

var obj = {};
var counter = (count) => (
    (i = 0) => ({
        next: () => (
            (i++ < count) ?
            { value: i, done: false } :
            { value: 0, done: true }
        )
    })
);
obj[Symbol.iterator] = counter(3);
console.log([...obj]) // [1, 2, 3]
///////////////////////////////////////////////////////////////////////////////////////////////////////

// Object가 @@iterator 를 가지고 있다면, iterable 이다.
// Object에서 next 메서드가 값을 반복하면서, {done, value} 를 반환한다면, iterator 이다.

// spread
var text = '안녕';
console.log([...text]); // [ '안', '녕' ]


/////////////////////

function* generator(i) {
    yield i;
    yield i + 10;
  }
  
  const gen = generator(10);
  
  console.log(gen.next().value);
  // expected output: 10
  
  console.log(gen.next().value);
  // expected output: 20
  

////////////////////////////////////////////////
// Generator는 Iterator를 반환하는 함수이다. 
// Generator 함수는 function 키워드 다음에 별표 (*)가 추가되고 새로운 yield 키워드를 사용한다.
// 
// generator
function *createIterator() {
    yield 1;
    yield 2;
    yield 3;
}
// generator는 일반 함수처럼 호출되지만 iterator를 반환합니다.
let temp = createIterator();
console.log(temp.next().value);     // 1
console.log(temp.next().value);     // 2
console.log(temp.next().value);     // 3
// yield 1을 실행 한 후에, 함수는 Iterator의 next() 메서드가 호출될 때까지 다른 것을 실행하지 않고, 
// next()가 호출 되는 시점에 yield 2가 실행된다.


// next() 메서드를 실행하여 return을 만나게 되면 그자리에서 리턴값과 done이 true가 되어 
// 제너레이터 함수를 종료한다.
function* gen2() {
    yield 1;
    return 1.5;
    yield 2;
}

var g = gen2();

console.log(g.next()); // {value: 1, done: false}
console.log(g.next()); // {value: 1.5, done: true}
console.log(g.next()) // {value: undefined, done: true}


//제너레이터 키워드 (*) 는 yield 에도 사용 할 수 있다.
function* gen3() {
    yield 1;
    yield 2;
}

function* gen4() {
    yield* gen3();
    yield 3;
}

var ge = gen4();

console.log('=======================================')
console.log(ge.next()); // {value: 1, done: false}
console.log(ge.next()); // {value: 2, done: false}
console.log(ge.next()); // {value: 3, done: false}
console.log(ge.next()); // {value: undefined, done: true} // done이 true로 되면서 종료



console.log('=======================================')
function* gen5() {
    yield 1;
    yield 2;
    yield 3;
}

var gg = gen5();

console.log(gg.next()); // {value: 1, done: false}
console.log(gg.return(123)); // {value: 123, done: true}

var g6 = gen5();
console.log(g6.next()); // {value: 1, done: false}
console.log(g6.throw("error 호출")); // 에러 호출, 제너레이터 종료

// 제너레이터를 사용하면 비동기 코드를 마치 동기식 코드를 작성하는 것처럼 작성할 수 있다.
// 서버에서 대용량의 데이터를 받아와서 순차적으로 처리하고 싶을때 사용하면 유용할 것 같다.



