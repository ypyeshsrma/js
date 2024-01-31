const a = 1234
var b = 5678
let c = 9989

console.log(a)
console.log(b)
console.log(c)

//a = 7767 //Error Can't assign to const variable
b = 8878
c = 6656

console.log(a)
console.log(b)
console.log(c)
console.table([a,b,c])

//use let in all case // Try to avoid var => Reason: Block and functional scope
//Example
{
    var name="Yogesh Sharma"
    console.log(name)

{
    var name="Yogesh"
    console.log(name)
}
    var name="Sharma"
    console.log(name)
{

}
console.log(name)
}

