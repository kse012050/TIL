# scroll-behavior
__``scroll-behavior``__ ``CSS`` 속성은 탐색 또는 CSSOM 스크롤 API에 의해 스크롤이 트리거될 때 스크롤 상자의 동작을 설정합니다.

## Try it
[예제 내용 확인](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)  
  
사용자가 수행하는 스크롤 등 다른 스크롤 동작은 이 속성의 영향을 받지 않습니다. 루트 요소에 이 속성을 지정하면 뷰포트에 적용됩니다. ``body`` 요소에 지정된 이 속성은 뷰포트에 적용되지 않습니다.  
  
사용자 에이전트는 이 속성을 무시할 수 있습니다.

## Syntax
~~~css
/* Keyword values */
scroll-behavior: auto;
scroll-behavior: smooth;

/* Global values */
scroll-behavior: inherit;
scroll-behavior: initial;
scroll-behavior: revert;
scroll-behavior: revert-layer;
scroll-behavior: unset;
~~~
``scroll-behavior`` 속성은 아래 나열된 키워드 값 중 하나로 지정됩니다.

## Values
### auto
스크롤 상자가 즉시 스크롤됩니다.

### smooth
스크롤 상자는 사용자 에이전트가 정의한 이징 함수를 사용하여 사용자 에이전트가 정의한 시간 동안 부드럽게 스크롤됩니다. 사용자 에이전트는 플랫폼 규칙(있는 경우)을 따라야 합니다.

## Examples
### 부드러운 스크롤 동작 설정
#### HTML
~~~html
<nav>
    <a href="#page-1">1</a>
    <a href="#page-2">2</a>
    <a href="#page-3">3</a>
</nav>
<div class="scroll-container">
    <div class="scroll-page" id="page-1">1</div>
    <div class="scroll-page" id="page-2">2</div>
    <div class="scroll-page" id="page-3">3</div>
</div>
~~~

#### CSS
~~~css
a {
    display: inline-block;
    width: 50px;
    text-decoration: none;
}
nav,
.scroll-container {
    display: block;
    margin: 0 auto;
    text-align: center;
}
nav {
    width: 339px;
    padding: 5px;
    border: 1px solid black;
}
.scroll-container {
    width: 350px;
    height: 200px;
    overflow-y: scroll;
    scroll-behavior: smooth;
}
.scroll-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 5em;
}
~~~

#### Result
[예제 내용 확인](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)  
  
[내용출처 MDN scroll 이동 모션](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)

