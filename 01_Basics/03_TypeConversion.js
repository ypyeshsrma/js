var a = "this is string"
var b = Number(a)
//Can't convert string into number => NaN (Not a number)
console.log(b)

var c = null
var d
var e = true

var f = Number(c)
var g = Number(d)
var h = Number (e)

console.table([c,d,e,f,g,h])