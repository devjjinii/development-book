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
    for(let i =0; i< 3;  i++) { 
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