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
