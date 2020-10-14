let myName = 'dev' // const 로 하면 error ( scope )

function printName() {
    console.log('myName >>>', myName)
}

myName = 'jin' // let 으로 선언했기 때문에 가능
printName()
myName = 'yujin'
printName()

// ====================================

function outerFunction(outerVariable) {
    const outer2 = 'hi'

    return function innerFunction(innerVariable) {
        console.log('Outer Variable : ' + outerVariable)
        console.log('Inner Variable : ' + innerVariable)
        console.log(outer2)
    }
}

// 밖에서 안의 함수 접근 가능
const newFunction = outerFunction('outside')
newFunction('inside')

// ======================================

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

// =========================================

// closure with a problem   
function f2() {
    for(var i =0; i< 3;  i++) {   // var 사용 금지, let 사용
        setTimeout(function () {
            console.log(i) // 3 3 3
        }, 1000 * i);
    } // i 3
}

// solve the problem
function f3() {
    for(let i =0; i< 3;  i++) { 
        setTimeout(function () {
            console.log(i) // 0, 1, 2
        }, 1000 * i);
    } // i no longer exists 
}