# JS 判断是否为对象或数组的几种方法

1.Array.isArray

2.Object.prototype.toString

3.Object.getPrototypeOf

4.constructor

5.instanceof

6.isPrototypeOf

```js
var colors = ["red", "blue", "green"]

const res1 = Array.isArray(colors)
const res2 = Object.prototype.toString.call(colors)
const res3 = Object.getPrototypeOf(colors)

console.log(res1) // true
console.log(res2 === "[object Array]") // true
console.log(res3) // Object(0) []
console.log(colors.constructor === Array) // true
console.log(colors instanceof Array) // true
console.log(Array.prototype.isPrototypeOf(colors)) // true
```
