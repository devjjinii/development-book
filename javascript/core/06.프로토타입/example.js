// obj -> otherProto.prototype -> Object.prototype  -> null

let otherProto = function() {
    this.prop1 = 123;
    this.inner = function() {
        console.log('inner method')
    };
};

otherProto.prototype.someMethod = function() {
    console.log('otherProto')
};

let obj = new otherProto();
console.log(obj.prop1); // 123
obj.inner(); // inner method
obj.someMethod(); // otherProto
obj.toString();
// obj.__proto__.inner();  // error!!