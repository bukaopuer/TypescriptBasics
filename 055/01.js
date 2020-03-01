"use strict";
var Teacher = /** @class */ (function () {
    function Teacher(info) {
        this.info = info;
    }
    Teacher.prototype.getInfo = function (key) {
        return this.info[key];
    };
    return Teacher;
}());
var teacher = new Teacher({
    name: "頂避寒",
    age: 18,
    gender: true
});
var test = teacher.getInfo('name');
console.log(test);
