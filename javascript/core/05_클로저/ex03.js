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