# vuex-Test
- vuex 예제
- vuex Helper 적용!

## vuex 왜 사용?
- vuex는 상태관리를 위한 패턴이자 라이브러리이다
- vue.js는 데이터 통신을 할 때 상-하위 관계가 아니면 데이터 통신이 어려운데,
- vuex는 데이터를 store.js라는 한 곳에 모아서 꺼내 쓰게 하여, 컴포넌트 간의 통신이나 데이터 전달을 좀 더 편하게 관리해준다.

## store.js
- state :  데이터
- getter : state를 화면에 바인딩 / **computed에 등록**
- mutation : state값을 변경(=setter) / **methods에 등록** / 동기
- actions :  이벤트처리, http통신 처리등 언제 결과를 받아올지 예측 할 수 없을 경우에 사용 / **methods에 등록** / 비동기

## methods와 computed 차이점  
- methods : 이 안에 들어있는 함수들이 모든 상황에서 재실행 (새롭게 다시 계산)  => 모두 methods에 넣으면 성능 저하될수도 있음!
- computed : 참고하고 있는 값의 변경에만 재실행

## vuex 설치
```
npm install vuex --save
```
- 설치 후 store.js 파일 생성

### 참고 블로그
- https://joshua1988.github.io/web-development/vuejs/vuex-start/#%EB%93%A4%EC%96%B4%EA%B0%80%EB%A9%B0

------------------------------------

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
