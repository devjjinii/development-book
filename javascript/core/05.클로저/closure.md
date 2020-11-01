# 클로저

* 클로저란
* 클로저 사용이유
* 클로저의 장점
* 클로저의 단점
---

* 클로저란
    * 어떤 함수에서 선언한 변수를 참조하는 내부함수를 외부로 전달할 경우, 함수의 실행 컨텍스트가 종료된 후에도 해당 변수가 사라지지 않는 현상.<br>
    함수를 return하는 경우뿐 아니라 콜백으로 전달하는 경우도 포함
    * 함수를 구성하는 코드와 함수가 생성될 당시 스코프 환경({})으로 구성됨
        * 스코프 환경(=Lexical Environment) 을 알고 있기에 함수가 생성될 당시 모든 변수를 기억해두었다가 함수 호출 시 사용 가능. 
    * 클로저 함수를 호출한 함수가 종료되더라도, 호출한 함수의 환경(변수 등)을 클로저 함수가 기억하고 있음.
    ~~~js
    function printClosure() {
        let bar = 'closure';

        return function() { // 익명함수 반환
            return bar;
        }
    }

    let closure = printClosure(); // 반환된 결과를 변수 저장
    console.log(closure()); // 내부함수 호출 > 'closure' 출력
    ~~~
    ~~~js
    let a = '1';
    function outer () {
        
        let b = "2";
        let d = "4";
        
        /////////////////////////////////////////////////
        function inner () {
            let c = "3";
            console.log(a, b, c); // 1,2,3
        }
        
        //////클로저 : 함수 안에 선언된 함수 ///////////////
        //////////////////////////////////////////////////
        inner();

        return d; 
    
    };
    console.log(outer()); // 4
    ~~~
    * clousre.js 예제를 실행.

* 클로저 사용이유
    * 정보은닉과 캡슐화를 할 수 있다.
        * 자바 같은 경우는 public, private으로 컨트롤을 한다.
    ~~~js
    a = (function () {
    let privatefunction = function () {
        console.log('hello');
    }

    // a 내부의 publicfunction 함수는 privatefunction 함수를 호출.
    return {
        publicfunction : function () {
            privatefunction();  // 클로저로 접근 가능 > 호출 가능
        }
    }
    })();

    // privatefunction 은 직접 호출 할 수 없고,
    // publicfunction 을 통해 호출 가능하다.
    ~~~
    <img width="605" alt="스크린샷 2020-10-09 오후 9 41 03" src="https://user-images.githubusercontent.com/53853730/95584139-2ea74700-0a78-11eb-93a5-ac05238efddc.png">

* 클로저의 장점
    * 클로저가 호출되는 시점의 로컬 변수 정보를 클로저 객체가 존재하는 동안 참조.
    *  외부에서 로컬 변수(saying)를 접근할 수 없게 막을 수 있음( * 위의 클로저 사용이유 참고)
        * outerFunc()는 이미 종료했기 때문에 클로저 말고는 로컬 변수에 접근할 수 있는 방법이 없음.
    ~~~js
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
    ~~~
    * 클로저는 변수를 탐색할 때 실행환경에서만 찾기 때문에 스코프 체인을 따라 올라가 전역변수까지 확인하는 과정이 없어, 스코프 탐색에 시간이 덜 소모됨.


* 클로저의 단점
    * 실행될 때마다 각자의 참조 영역을 유지해야 하기 때문에 메모리 사용량이 늘어남 //  클로저를 남발하면 오버플로우가 발생할수도 있음.
        * 클로저를 무자비하게 사용할 경우 가비지컬렉션 대상이 될 객체들이 메모리상에 존재하게 되므로
        * 실행환경에서 유지해야 하는 데이터가 큰 경우 클로저는 생각보다 많은 메모리를 소모함.
        * 클로저 사용 후에는 메모리를 해제해 불필요한 메모리 소모를 줄일 수 있음.
            * closure = null; // 클로저 변수에 널을 대입하면 됨.
   

---
* 참고 사이트
    * https://ko.javascript.info/closure
    * https://apost.kr/646