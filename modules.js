// 자바스크림트 모듈 로더 라이브러리(AMD, Commons JS)기능을 js 언어 자체에서 지원
// 호출되기 전까지는 코드 실행과 동작을 하지 않는 특징이 있음
// 자바는 클래스 단위로 가능하나 자바스크립트(es5)는 파일을 다르게 해도 전역 스코프

// import { sum } from './libs/math.js'; // 호출하는 순간 스코프가 달라짐.
const { sum } = require('./libs/math');
console.log(sum(1, 2));

// export default 인캡슐레이션 하나만 모듈화 안전.