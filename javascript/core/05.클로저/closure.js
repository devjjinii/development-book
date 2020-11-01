/** 예제 1
 *  
*/

let a; 
{ 
 let b = 1; //블록 스코프 영역 안에 있음으로 밖에서는 참조할 수 없음.
 a = function(){ // 블록 스코프 영역에서 함수 할당
  console.log(b); 
 }
}
a(); // 1
// console.log(b); //  b is not defined

let c;
{
 let d = {note: 'aa'};
 e = function (){
     return d;
 }
}
let f = e();
f.note = 'bb';
// 블록 스코프에서 선언된 변수를 함수 e에서 참조하고,
// 전역스코프에서 f함수에 담은 경우 손쉽게 그 안에 내용을 변경 가능하다. 
// 블록 스코프 내에서 선언된 d의 값을 외부에서 수정 가능하게 된 것이다.

/** 예제 2
 * 
 */


let myLang = 'javascript' // const 로 하면 error ( scope )

function printLang() {
    console.log('myLang >>>', myLang)
}

myLang = 'es6' // let 으로 선언했기 때문에 가능
printLang()
myLang = 'python'
printLang()

/** 예제 3
 * 
*/

function outerFunction(outerVariable) {
    const outer2 = 'hi'

        return function innerFunction(innerVariable) {
            console.log('Outer Variable : ' + outerVariable) //Outer Variable : outside
            console.log('Inner Variable : ' + innerVariable) //Inner Variable : inside
            console.log(outer2) // hi
        }
    }

// 밖에서 안의 함수 접근 가능
const newFunction = outerFunction('outside')
newFunction('inside')

/** 예제 4
 * 
 */
function add1(a,b) {
    return a + b;
}

let poison = 0; // 클로저

function add2(a,b) {
    return a + b + poison;  // 클로저
}

console.log(add1(6,11)); // 17
poison = 3;
console.log(add2(6,11)); // 20

/** 예제 5
 * 
 */

function outerFunc(name){
    let saying = name + ' 안녕!';
    return function(){ // 익명함수 반환.
        return saying; 
    }
}
// 반환된 함수는 변수에 저장되고, 익명함수를 실행하면 
// 익명함수가 반환하는 saying 변수의 값을 콘솔에 출력. > outerFunc() 함수가 이미 종료
let closure1 = outerFunc('javascript');
let closure2 = outerFunc('python');

// 하지만 실행하면 saying 의 변수값이 출력 (넘긴 파라미터 값이 적용된 변수 출력)
console.log(closure1());
console.log(closure2());

/**예제 6
 * 
 */


function sum(a) {

    return function(b) { //  익명 함수 반환
      return a + b; // 'a'는 외부 렉시컬 환경에서 가져옴.
    };
  
}

console.log( sum(1)(2) ); // 3
console.log( sum(5)(-1) ); // 4


/**예제 7
 * 
 */

function makeHelloFunction() {
    let message = "Hello World"; 
    return function () { // 익명 함수 객체, 즉 클로저를 반환
      console.log(message);
    };
  }
  let hello = makeHelloFunction();
  hello(); 
  
  // makeHelloFunction()에서 반환하는 익명 함수 객체에 스코프 환경이 존재하기 때문.
  // 이러한 현상이 마치 변수를 붙잡아두는 것처럼 보이므로, 
  // 붙잡아둔다는 뜻을 가진 영어 단어 ‘캡처(capture)’를 사용해 변수 캡처라고도 부른다.


  /** 예제 8 
   * >>>> 스코프 관련 예제
   * */ 
// let 키워드로 선언된 변수는 블록 레벨 스코프를 따른다. 
// 코드 블록 내에 선언된 변수 foo는 블록 레벨 스코프를 갖는 지역 변수이다.
// 전역에서 선언된 변수 foo와는 다른 별개의 변수이다.
// 또한 변수 bar도 블록 레벨 스코프를 갖는 지역 변수이다. 
// 따라서 전역에서는 변수 bar를 참조할 수 없다.
let foo = 123; // 전역 변수

{
  let foo = 456; // 지역 변수
  let bar = 456; // 지역 변수
}

console.log(foo); // 123
// console.log(bar); // ReferenceError: bar is not defined

/** 예제 9 */
var funcs = [];

// 함수의 배열을 생성하는 for 루프의 i는 for 루프의 코드 블록에서만 유효한 지역 변수이면서 자유 변수이다.
for (let i = 0; i < 3; i++) {
  funcs.push(function () { console.log(i); });
}

// 배열에서 함수를 꺼내어 호출한다
for (var j = 0; j < 3; j++) {
  console.dir(funcs[j]);
  funcs[j]();
}

/** 예제 10 */
let aa = '1';

function outer () {
    
    let bb = "2";
	let dd = "4";
    
    /////////////////////////////////////////////////
	function inner () {
		let cc = "3";
		console.log(aa, bb, cc); // 1,2,3
    }
    
    //////클로저 : 함수 안에 선언된 함수 ///////////////
    //////////////////////////////////////////////////
	inner();

    return dd; 
   
};
console.log(outer()); // 4
