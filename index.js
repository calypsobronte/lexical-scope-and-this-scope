/*

   __           _           _   __
  / /  _____  _(_) ___ __ _| | / _\ ___ ___  _ __   ___
 / /  / _ \ \/ / |/ __/ _` | | \ \ / __/ _ \| '_ \ / _ \
/ /__|  __/>  <| | (_| (_| | | _\ \ (_| (_) | |_) |  __/
\____/\___/_/\_\_|\___\__,_|_| \__/\___\___/| .__/ \___|
                                            |_|

*/



// function foo () {
//   var a = 0;
// }
// console.log(a);
// !!!!!!!!!!!!!! Go back to slides !!!!!!!!!!!!!!


// function foo(a) {
// 	var b = a * 2;
// 	function bar(c) {
// 		console.log( a, b, c );
// 	}
// 	bar(b * 3);
// }
// foo( 2 );
// !!!!!!!!!!!!!! Go back to slides !!!!!!!!!!!!!!



// var arr = ['a','b','c']
// function iterate (param) {
//   for(var i = 0; i < param.length; i++) {
//     console.log(param[i])
//   }
//   console.log('i:', i)
// }
// iterate(arr)
// !!!!!!!!!!!!!! Go back to slides !!!!!!!!!!!!!!



// setTimeout(function sayHelloInASecond () {
//   console.log('Hello!')
// }, 1000)
// console.log(sayHelloInASecond)



// function sayHelloInASecond () {
//   console.log('Hello!')
// }
// setTimeout(sayHelloInASecond, 3000)
// console.log(sayHelloInASecond)



// (function sayHello() {
//   var text = 'hello'
//   console.log(text)
// })()
// console.log(text)




/*


             _     _   _
  /\  /\___ (_)___| |_(_)_ __   __ _
 / /_/ / _ \| / __| __| | '_ \ / _` |
/ __  / (_) | \__ \ |_| | | | | (_| |
\/ /_/ \___/|_|___/\__|_|_| |_|\__, |
                               |___/


*/



// a = 2
// var a
// console.log(a)



// console.log( a );
// var a = 2;



// sayHello()
// function sayHello() {
//   console.log('Hello')
// }


// sayHello()
// var sayHello = function sayHello () {
//   console.log('Hello')
// }



// foo()
// function foo() {
// 	console.log(a)
// 	var a = 2
// }



// foo()
// bar()
// var foo = function bar() {
// 	// ...
// }



// foo()
// function foo() {
// 	console.log( 1 )
// }
// var foo = function() {
// 	console.log( 2 )
// };
// function foo() {
// 	console.log( 3 )
// }



// foo()
// var a = true
// if (a) {
//   function foo() { console.log( 'a' ) }
// }
// else {
//   function foo() { console.log( 'b' ) }
// }
// !!!!!!!!!!!!!! Go back to slides !!!!!!!!!!!!!!



/*


   ___ _
  / __\ | ___  ___ _   _ _ __ ___
 / /  | |/ _ \/ __| | | | '__/ _ \
/ /___| | (_) \__ \ |_| | | |  __/
\____/|_|\___/|___/\__,_|_|  \___|



*/



// let name = 'Foo'
// function sayHello () {
//   console.log(`Hello ${name}`)
// }
// setTimeout(() => {
//   name = 'Bar'
// },500)
// setTimeout(sayHello, 1000)
// !!!!!!!!!!!!!! Go back to slides !!!!!!!!!!!!!!



// for (var i = 1; i <= 5; i++) {
// 	setTimeout( function timer(){
// 		console.log( i )
// 	}, i * 1000 )
// }



// for (var i = 1; i <= 5; i++) {
// 	(function(){
// 		setTimeout( function timer(){
// 			console.log( i )
// 		}, i*1000 )
// 	})()
// }



// for (var i=1; i<=5; i++) {
// 	(function(){
// 		var j = i
// 		setTimeout( function timer(){
// 			console.log( j )
// 		}, j*1000 )
// 	})();
// }



// for (var i = 1; i <= 5; i++) {
// 	let j = i; // block-scope for closure!
// 	setTimeout( function timer(){
// 		console.log( j )
// 	}, j * 1000 )
// }



// for (let i = 1; i <= 5; i++) {
// 	setTimeout( function timer(){
// 		console.log( i )
// 	}, i * 1000 )
// }



/*


   __           _           _   _   _     _
  / /  _____  _(_) ___ __ _| | | |_| |__ (_)___
 / /  / _ \ \/ / |/ __/ _` | | | __| '_ \| / __|
/ /__|  __/>  <| | (_| (_| | | | |_| | | | \__ \
\____/\___/_/\_\_|\___\__,_|_|  \__|_| |_|_|___/



  !!!!!!!!!!!! RUN IN THE BROWSER !!!!!!!!!!!!

*/



// var name = 'MedellinJS'
// document.body.addEventListener(
//   'click',
//   () => {
//     console.log(`Hello ${this.name}`)
//   }
// )



/*


 _   _     _       __
| |_| |__ (_)___  / _\ ___ ___  _ __   ___
| __| '_ \| / __| \ \ / __/ _ \| '_ \ / _ \
| |_| | | | \__ \ _\ \ (_| (_) | |_) |  __/
 \__|_| |_|_|___/ \__/\___\___/| .__/ \___|
                               |_|


*/



// 1. Called with new? Use the newly constructed object.
// function App (name) {
//   this.name = name
//   console.log(this.name)
// }
// new App('HUGE')



// 2. Called with call or apply (or bind)? Use the specified object.
// function foo (a, b, c) {
//   const calculatedValue = a + b + c
//   console.log(this.bar, calculatedValue)
// }
// foo.call({bar: 'Invoked with "call"'},1,2,3)
// foo.apply({bar: 'Invoked with "apply"'},[4,5,6])
// const newFoo = foo.bind({bar: 'Created with "bind"'})
// newFoo(7,8,9)



// 3. Called with a context object owning the call? Use that context object.
// function foo () {
//   console.log(`Hi, I'm ${this.name}`)
// }
// const obj = {
//   name: 'OBJ',
//   identify: foo
// }
// obj.identify()



// 4. Default: undefined in strict mode, global object otherwise.
// 'use strict'
// function foo () {
//   this.bar = 'MedellinJS'
//   console.log(this.bar)
// }
// foo()
