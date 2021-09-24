# -webkit-line-clamp
__``-webkit-line-clamp``__ CSS 속성은 __블록 컨테이너__ 의 콘텐츠를 지정한 줄 수만큼으로 제한합니다.  
  
display 속성을 ``-webkit-box`` 또는 ``-webkit-inline-box``로, 그리고 -webkit-box-orient (en-US) 속성을 ``vertical``로 설정한 경우에만 동작합니다.  
  
-webkit-line-clamp만 사용하는 경우, 말줄임표는 노출되나 넘친 콘텐츠가 숨겨지지 않으므로 대개 __overflow__ 속성 또한 __hidden__ 으로 설정해야 합니다.  
  
앵커 요소에 적용한 경우 텍스트의 끝이 아니라 중앙에서 잘리는 경우도 있습니다.  
  
> __참고__ :-webkit-line-clamp는 원래 WebKit이 구현했었으며 몇몇 문제점을 가지고 있으나 레거시 지원을 위해 표준화를 거쳤습니다. CSS Overflow Module Level 3 명세의 line-clamp가 -webkit-line-clamp를 대체하기 위해 정의된 속성입니다.

## 구문
~~~css
/* 키워드 값 */
-webkit-line-clamp: none;

/* <integer> 값 */
-webkit-line-clamp: 3;
-webkit-line-clamp: 10;

/* 전역 값 */
-webkit-line-clamp: inherit;
-webkit-line-clamp: initial;
-webkit-line-clamp: unset;
~~~

### none
콘텐츠를 자르지 않습니다.

### ``<integer>``
몇 줄 뒤에 콘텐츠를 자를지 지정합니다. 0보다 커야 합니다.

[내용출처 MDN line-clamp 세로 라인 짜르기](https://developer.mozilla.org/ko/docs/Web/CSS/-webkit-line-clamp)