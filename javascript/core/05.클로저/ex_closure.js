// simple closure
function f1(a) {
    let b = 2;
    setTimeout(function () {
        console.log(a, b)
    }, 1000);

}

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
    let count = 0; 

    for(let i =0; i< 3;  i++) {
        count ++ ;
        
        setTimeout(function () {
            console.log(i) // 0, 1, 2
        }, 1000 * i);
    } // i no longer exists 
}

function f4() {
    for(let i =0; i < 3;  i++) { 
        setTimeout((function (x) {
            console.log(x)
        }).bind(this, i) , 1000 * i);
    } 
}

// 클로저는 스코프를 계속 들고 있음

f4();

function makeAdder(x) {
    let y = 1;
    return function(z) {
      y = 100;
      return x + y + z;
    };
  }
  
  let add5 = makeAdder(5);
  let add10 = makeAdder(10);
  //클로저에 x와 y의 환경이 저장됨
  
  console.log(add5(2));  // 107 (x:5 + y:100 + z:2)
  console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
  //함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산

function count() {
    
    for (i = 1; i < 10; i += 1) {
        setTimeout(function timer() {
            console.log(i);
        }, i*100);
    }
  }

count();

function count() {
    for (let i = 1; i < 10; i += 1) {
        setTimeout(function timer() {
            console.log(i);
        }, i * 100);
    }
  }
count();


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

function count() {
    let i;
    for (i = 1; i < 10; i += 1) {
        (function(countingNumber) {
            setTimeout(function timer() {
                console.log(countingNumber);
            }, i * 100);
        })(i);
    }
}
count();