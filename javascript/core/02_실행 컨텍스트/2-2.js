function a(x) {
    console.log(x); //1

    var x;
    console.log(x); //1
    var x = 2;
    console.log(x); //2
}

a(1);