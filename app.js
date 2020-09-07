// ES6
// #Diff between "let" & "var" keyword

// we can't use any variable ouside the function. i.e "let" or "var"
// "let" is a block level variable.
// we can't use same variable name for both of them (let & var).
// we can't use same variable name for both of "let". 
// always use "let" in for loop initialization.
var name = "var"

if (true) {
    let name = "let"
    name = "name"
    var name2 = "var if"
}

for(var i=0; i<5; i++){
    var nn = i;
}

function fun() {
    let nn = 5
    var name = "fun"
    hfun = "hfun"
}
fun()

console.log(i)
console.log(name)
console.log(nn)
console.log(name2)
console.log(hfun)

// #Template Literals
var firstname = "first"
var lastname = "last"

console.log(`My name is: ${firstname} ${lastname}`)

// #Spread Operator
// In  Array
var student1 = ["s1", "s2"]
var student2 = ["s3", "s4"] // var student2 = [...student1, "s3", "s4"]

// In Object
var Objstudent1 = {name: "first"}
var Objstudent2 = {...Objstudent1, school: "abc"} 

var merge = student1.concat(student2)
var student = [...student1, ...student2]

console.log(merge)
console.log(Objstudent2)
console.log(student)

// #Object Destructuring
// use same name in "Object Destructuring"
var student ={
    fname : "first",
    lname : "last",
    school : "abc"
}
let {fname, lname, school} = student
console.log(school)
// Array Destructuring
let array = ["a", "b", "c"]
let [name1, name2, name3] = array
console.log(name1)

// #Ternary Operator
var age = 30
var check = age > 10 && age < 50? "greater" : "smaller"
console.log(check)

var bool = true
var name = bool && "name"
console.log(name)

// #Async & Sync
async function getdata(){
    var promise = new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(result => resolve(result))
            .catch(error => reject(error))
    })

    let data = await promise
    console.log(data)
}
getdata()

// #Promises
var promise = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve("It's resolve")
    // }, 3000)
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(result => resolve(result))
        .catch(error => reject(error))
})

console.log(promise)
promise.then(data => {
    console.log("Resolev==>", data)
    console.log(promise)
}).catch(error => {
    console.log("Error==>", error)
    console.log(promise)
})

// #Fubction Expression
let foo = function(){
    console.log("Hello World")
}
foo()

// #Arrow Function
let foo = () =>{
    console.log("Hello World")
}
foo()

let foo = _ =>{
    console.log("Hello World")
}
foo()

let foo = (name1, name2)=>{  
    console.log(`${name1} ${name2}`)
}
foo("abc", "def")

let foo = ()=> console.log("Hello World")
foo()

// #Call Back
let getdata = (callback)=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(result =>{
                // console.log(result)
                callback(result)
            })
            .catch(error => console.log(error))
}

let callback = (data)=>{
    console.log(data)
}

getdata(callback)

// #Array Function
// Filter
let arr = [{name:"abc", age:20}, {name:"def", age:30}]
let filter = arr.filter( a => a.age === 30) // a => a.age > 10
console.log(filter)

// Searching
let search = "a"
let name = "abc"
console.log(name.startsWith(search)) // name.endsWith(search)

// Map
let arr = [2, 4, 6, 8]
console.log(arr)
let multiply = arr.map(a => a*2)
console.log(multiply)

let arr = [{name:"abc"}, {name:"def"}]
console.log(arr)
let multiply = arr.map(a => a.name = "xyz")
console.log(multiply)

// ES6 - Classes
function student(name, email){
    this.name = name
    this.email = email
}
let student1 = new student("abc", "xyz@mail.com")
console.log(student1)


// Use of Extends
class student{
    constructor(name, email){
       this.name = name
       this.email = email
   }
}
class school extends student{
    constructor(name, email, school){
        super(name, email)
        this.school = school
    }
}
let student1 = new school("abc", "xyz@mail.com", "xyz")
console.log(student1)
