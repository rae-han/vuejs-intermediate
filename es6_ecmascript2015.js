/**
 * 
 * * babel 
 * 구 버전 브라우저 중에서 es6의 기능을 지원하지 않는 브라우저가 있으므로 transpiling이 필요
 * es6의 문법을 각 브라우저의 호환 가능한 es5로 변환하는 컴파일러
 * 
 */

 /**
  * * const & let
  * 블록 단위로 변수의 범위가 제한됨
  */


// - 변수의 Scope
// var sum = 0;
// for (var i=0; i <=5; i++) {
//   sum = sum + i;
// }
// console.log(sum); // 15
// console.log(i); // 6

// - Hoisting (끌어 올려진다)
// 선언한 함수와 변수를 해석기가 가장 상단에 있는 것처럼 인식
// js 해석기는 코드의 라인 순서와 관계 없이 함수 선언식과 변수를 위한 메모리 공간을 먼저 확보
// function~ var 는 코드의 최상단으로 끌어올려진 것 처럼 보임

// 실제 코딩
// var sum = 5;
// sum = sum + i;
// function sumAllNubmers() {

// }
// var i = 0;
// 실제 실행
// var sum;
// function sumAllNumbers() {

// }
// var i;
// sum = 5;
// sum = sum + i;
// i = 10;

// Arrow Function
// var func1 = function() {
//   return this;
// }

// let func2 = () => {
//   return this;
// }

// var func3 = () => {
//   return this;
// }

// console.log(func1());
// console.log(func2());
// console.log(func3());

// let arr = ["a", "b", "c"];
// arr.forEach(function(value) {
//   console.log(value);
// })

// arr.forEach(value => console.log(value));

