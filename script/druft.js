function f1 (func) {
    for(let i = 0;i<10000;i++);
    func()
}
const f2 = () => console.log("hello");
f1 (f2);
const f3 = (a, b) => console.log(a*b);
f1(function () {
    f3(3, 6)
})