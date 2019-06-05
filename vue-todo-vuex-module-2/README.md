# vue-todo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

vue create [project-name]
- option
  - 1. default
  - 2. manually select features
    - 기능 선택 가능

################ ################ Vuex ################ ################
1. 복잡한 애플리케이션의 컴포넌트들을 효율적으로 관리하는 라이브러리
2. Flux패턴
3. state(data), getters(computed), mutations(method), actions(비동기 method) 
4. Helper 기능
5. 프로젝트 구조화, 모듈 구조화

# Vuex
 - 무수히 많은 컴포넌트의 데이터를 관리하기 위한 상태 관리 패턴이자 라이브러리
 - React의 Flux 패턴에서 기인함 (React는 Redux사용)
 
# Flux
 - MVC 패턴의 복잡한 데이터 흐름 문제를 해결하는 개발 패턴 - Unidirectional data flow (모든 데이터 방향은 한방향)
 - Action -> Dispatcher -> Modal -> View
  1. action: 화면에서 발행하는 이벤트 또는 사용자의 입력
  2. dispatcher: 데이터를 변경하는 방법, 메서드
  3. model: 화면에 표시할 데이터
  4. view: 사용자에게 비춰지는 화면

// Flux 란?
// MVC 패턴의 복잡한 데이터 흐름 문제를 해결하는 개발 패턴 - Undirectional data flow
// Action -> Dispatcher -> Model -> View
// 1. Action : 화면에서 발생하는 이벤트 또는 사용자의 입력
// 2. dispatcher : 데이터를 변경하는 방법, 메서드
// 3. model : 화면에 표시할 데이터
// 4. view : 사용자에게 비춰지는 화면

// MVC
// Controller -> Model <-> View
// 문제점, 컨트롤러 하나에 여러 모델이 연결되고 모델 1이 뷰 1, 2와 여결되고 모델 2가 뷰 1, 2와 연결되고 매우 복잡해질수 있다.


# MVC 패턴과 Flux 패턴 비교

  A. MVC
  a.Controller (모델과 뷰를 제어) -> b.Model (데이터) <=> c.View (화면)
  컨트롤러가 모델과 뷰를 연관있게 제어하면서 데이터 처리가 많은 방향으로 일어난다.
  모델 뷰가 많아지면?? 한 모델이 어떤 뷰를 갱신하고 그 뷰가 모델을 갱신하고 또...
  앱이 복잡해지면서 업데이트 루프가..(페이스북 채팅 화면)

  B. Flux
  단방향 - 데이터의 흐름이 여러 갈래로 나뉘지 않고 단방향으로만 처리

  Action -> Dispatcher -> Store -> View 
                 └--<---Action---<--┘

# Vuex가 필요한 이유
 - 복잡한 애플리케이션에서 컴포넌트의 개수가 많아지면 컴포넌트 간에 데이터 전달이 어려워진다.
 - 컴포넌트가 너무 많아지면 이벤트버스로는 힘들고 데이터 전달도 명시적으로 보기 어렵다.

 +해결할수 있는 문제
 + MVC 패턴에서 발생하는 구조적 오류
 + 컴포넌트간 전달 명시
 + 여러개의 컴포넌트에서 같은 데이터를 업데이트 할 때 동기화 문제

# Vuex 컨셉
 - state: 컴포넌트 간에 공유하는 데이터 data()
 - view: 데이터를 표시하는 화면 template
 - action: 사용자의 입력에 따라 데이터를 변경하는 행위 methods
       action
       ➚     ➘
    view  ←  state    - 단방향 https://vuex.vuejs.org/flow.png

# Vuex 구조
컴포넌트 -> 비동기 로직 -> 동기 로직 -> 상태
https://vuex.vuejs.org/vuex.png

# Vuex 설치
npm install vuex --save
yarn add vuex 


################ ################

# state는 왜 직접 변경하지 않고 mutations로 변경할까?
 - 여러 개의 컴포넌트에서 state값을 변경하는 경우 어느 컴포넌트에서 해당 state를 변경 했는지 추적하기가 어렵다.
 - 특정 시점에 어떤 컴포넌트가 state를 접근하여 변경한 건지 확인하기 어렵기 때문.
 - 따라서, 뷰의 반응성을 거스르지 않게 명시적으로 상태 변화를 수행
  - 반응성, 디버깅, 테스팅 혜택.


################ ################

# actions 란?
 - 비동기 처리 로직을 선언하는 메서드.
 - 비동기 로직을 담당하는 mutations
 - 데이터 요청, promise, es6 async 과 같은 비동기 처리는 actions에 선언

 // 첫번째 인자가  context
 // actions에서 mutations을 접근할수 있다.

 # 왜 비동기 처리 로직은 actions에 선언해야 할까?
  - 언제 어느 컴포넌트에서 해당 state를 호출하고, 변경했는지 확인하기가 어려움
  - 여러 개의 컴포넌트에서 mutations로 시간 차를 두고 state를 변경하는 경우
    state 값의 변화를 추적하기 어렵기 때문에 mutations 속성에는 동기 처리 로직만 넣어야 한다.

################ ################ ################ ################
# Helper
################ ################ ################ ################

# store에 있는 4가지 속성들을 간편하게 코딩하는 방법
* state -> mapState
* getters -> mapGetters
* mutations -> mapMutations
* actions -> mapActions



