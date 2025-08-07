var b ="concentrate";

function bb() {
	var a ="hello"
	console.log(b)
}

var b ="concentrate";

function bb() {
	var a ="hello"
	console.log(b)
}
undefined
bb()
VM49:5 concentrate
undefined


var b ="concentrate";

function bb() {
	var a ="hello"
	console.log(a)
}
undefined
bb()
VM77:5 hello
undefined


var b ="concentrate";

function bb() {
	var a ="hello"
}
undefined
console.log(a)
VM119:1 <clipPath id=​"a">​…​</clipPath>​
undefined


var b ="concentrate";

function bb() {
	var a ="hello"
}
console.log(a)
VM129:6 <clipPath id=​"a">​…​</clipPath>​
undefined
bb()
undefined


var b ="concentrate";

function bb() {
	var a ="hello"
}
console.log(a);

VM157:6 <clipPath id=​"a">​…​</clipPath>​
undefined


var b ="concentrate";

function bb() {
	var a ="hello"
}
console.log(b);

VM188:6 concentrate
undefined
bb()
undefined


var b = "concentrate";

function bb() {
	b = "hello";
}

var b = "concentrate";

function bb() {
	b = "hello";
}
undefined

console.log(b);
VM262:1 concentrate
undefined

bb();
undefined

console.log(b);
VM344:1 hello

const first = ()=>{
	const greet = "Hi";
	const second = () =>{
	alert(greet);
}
  return second;
	
}

const newFunc = first();
newFunc();


const compose = (f,g) =>(a)=>f(g(a));
const sum = (num)=>num+1;
compose (sum,sum)(5);
  
