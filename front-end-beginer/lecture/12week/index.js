/*
 *  상태관리 3대장
 *  - React, Angular, Vue.js
 *  - React, vue 는 가상 DOM => 상태가 바뀌면 전체를 다시 그릴 수 있다.
 *  - Angular는 섀도우DOM => angular2 + typescript + RxJS,  
 * 
 *  React
 *      - context-API
 *      - Hooks
 * 
 *  Redux (Flux Architecture)
 *      - Redux-saga
 *      - Redux-thunk
 *      - Redux-observable
 *      - Reselect
 * 
 *  MobX
 *      - mst
 *      - Rx-JS
 */

 //Redux
import CounterClass from './counter.js';
import { observable, observe, autorun } from 'mobx';

const someState = observable({
   someProp: 'someValue'
});

// reaction
autorun(() => console.log('상태바뀜'));

someState.someProp = 'dd'



/*
 * Js 책 추천
 * - 자카스 책들 : 특히 모던 자바스크립트
 * - You dont's know JS
 * 
 * 리액트
 * - 리액트를 다루는 기술
 * - 
 * 
 * 소셜미디어
 * - 미디엄, 페북
 * 
 * 블로깅
 * - 깃헙
 *    -markdown
 *    -git-hub page
 *       -hexo
 *       -jikil
 *       -ghost
 *    -gatsby
 * - 노션
 * 
 * 백엔드
 * - 기계인간 이종림? 립?
 */