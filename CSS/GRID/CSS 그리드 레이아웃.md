# CSS 그리드 레이아웃(Grid Layout)
CSS 그리드 레이아웃(Grid Layout)은 페이지를 여러 주요 영역으로 나누거나, 크기와 위치 및 문서 계층 구조의 관점에서 HTML 기존 요소로 작성된 콘트롤 간의 관계를 정의하는데 아주 탁월합니다  

테이블과 마찬가지로 그리드 레이아웃은 세로 열과 가로 행을 기준으로 요소를 정렬할 수 있습니다 하지만, 테이블과 달리 CSS 그리드는 다양한 레이아웃을 훨씬 더 쉡게 구현할 수 있습니다  
예를 들어, 그리드 컨테이너 속 자식 요소를, 마치 CSS로 일일이 위치를 지정해 준 것처럼실제로 겹치게 층을 지면서 자리를 잡도록 각 요소의 위치를 지정해 줄 수도 있습니다 

## 기본 예제 
~~~HTML
<div class="wrapper">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
  <div class="four">Four</div>
  <div class="five">Five</div>
  <div class="six">Six</div>
</div>
~~~

~~~ CSS
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.one {
  grid-column: 1 / 3;
  grid-row: 1;
}
.two { 
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
.three {
  grid-column: 1;
  grid-row: 2 / 5;
}
.four {
  grid-column: 3;
  grid-row: 3;
}
.five {
  grid-column: 2;
  grid-row: 4;
}
.six {
  grid-column: 3;
  grid-row: 4;
}
~~~

[CodePen 에서 예제 보기](https://codepen.io/pen/?&editable=true) [JSFiddle에서 예제보기](https://jsfiddle.net/api/mdn/)

## 참고
### CSS 프로퍼티 
|---|:---:|---:|
|```grid-template-columns```|```grid```|```grid-area```|
|```grid-template-rows```|```grid-row-start```|```grid-row-gap```|
|```grid-template-areas```|```grid-column-start```|```grid-column-gap```|
|```grid-template```|```grid-row-end```|```grid-gap```|
|```grid-auto-columns```|```grid-column-end```||
|```grid-auto-rows```|```grid-row```||
|```grid-auto-flows```|```grid-column```||
