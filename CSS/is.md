# :is() (:matches(), :any())

> __참고 :__ matches ()는 [CSSWG 이슈 # 3258](https://github.com/w3c/csswg-drafts/issues/3258)에서 : is ()로 이름이 변경되었습니다.  
  
``:is()`` CSS 의사 클래스 함수는 선택자 목록을 인수로 사용하고 해당 목록의 선택자 중 하나가 선택할 수있는 모든 요소를 선택합니다. 이것은보다 간결한 형태로 큰 선택자를 작성하는 데 유용합니다.

~~~css
/* 머리글 안에있는 모든 단락을 선택합니다.
    또는 마우스를 가져가는 바닥 글 요소 */
:is(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

/* 위의 내용은 다음과 같습니다. */
header p:hover,
main p:hover,
footer p:hover {
  color: red;
  cursor: pointer;
}
~~~

이전 브라우저는이 기능을 ``:matches()``로 지원하거나 이전 버전의 Chrome, Firefox 및 Safari를 포함하여 접두사가 붙은 이전 의사 클래스 인 ``:any()``를 통해 지원합니다. ``:any()``는 공급 업체 접두사가 필요하고 복잡한 선택기를 지원하지 않는다는 점을 제외하면 ``:matches()``/ ``:is()``와 똑같은 방식으로 작동합니다.  
  
이러한 레거시 의사 클래스는 이전 버전과의 호환성을 제공하는 데 사용할 수 있습니다.

~~~css
/* :-*-any () 및 : matches ()가있는 역 호환 버전
    (선택자를 단일 규칙으로 그룹화 할 수 없습니다.
    잘못된 선택기가 있으면 전체 규칙이 무효화되기 때문입니다.) */
:-webkit-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
:-moz-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
:matches(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
~~~

## Forgiving Selector Parsing (선택기 구문 분석 허용)
사양은 ``:is()`` 및 ``:where()``를 관용 선택자 목록을 허용하는 것으로 정의합니다.  
  
선택자 목록을 사용할 때 CSS에서 선택자 중 하나라도 유효하지 않으면 전체 목록이 유효하지 않은 것으로 간주됩니다. ``:is()`` 또는 ``:where()``를 사용하는 경우 하나가 구문 분석에 실패하면 전체 선택기 목록이 유효하지 않은 것으로 간주되는 대신 올바르지 않거나 지원되지 않는 선택기가 무시되고 다른 선택기가 사용됩니다.

~~~css
:is(:valid, :unsupported) {
  ...
}
~~~

``:unsupported``를 지원하지 않는 브라우저에서도 올바르게 구문 분석되고 ``:valid``와 일치합니다.

~~~css
:valid, :unsupported {
  ...
}
~~~

``:valid``를 지원하더라도 ``:unsupported``를 지원하지 않는 브라우저에서는 무시됩니다.


## Examples

### Cross-browser example (브라우저 간 예)
~~~html
<header>
  <p>This is my header paragraph</p>
</header>

<main>
  <ul>
    <li><p>This is my first</p><p>list item</p></li>
    <li><p>This is my second</p><p>list item</p></li>
  </ul>
</main>

<footer>
  <p>This is my footer paragraph</p>
</footer>
~~~
~~~css
:-webkit-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

:-moz-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

:matches(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

:is(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
~~~

~~~js
let matchedItems;

try {
  matchedItems = document.querySelectorAll(':is(header, main, footer) p');
} catch(e) {
  try {
    matchedItems = document.querySelectorAll(':matches(header, main, footer) p');
  } catch(e) {
    try {
      matchedItems = document.querySelectorAll(':-webkit-any(header, main, footer) p');
    } catch(e) {
      try {
        matchedItems = document.querySelectorAll(':-moz-any(header, main, footer) p');
      } catch(e) {
        console.log('Your browser doesn\'t support :is(), :matches(), or :any()');
      }
    }
  }
}

matchedItems.forEach(applyHandler);

function applyHandler(elem) {
  elem.addEventListener('click', function(e) {
    alert('This paragraph is inside a ' + e.target.parentNode.nodeName);
  });
}
~~~

이것은 내 헤더 단락입니다.
- 이것은 나의 첫번째  
목록 항목
- 이것은 나의 두 번째  
목록 항목  

이것은 내 바닥 글 단락입니다.

### Simplifying list selectors (목록 선택기 단순화)
``:is()`` 의사 클래스는 CSS 선택자를 크게 단순화 할 수 있습니다. 예를 들어, 다음 CSS:
~~~css
/* 3-deep (또는 그 이상) 정렬되지 않은 목록은 사각형 사용 */
ol ol ul,     ol ul ul,     ol menu ul,     ol dir ul,
ol ol menu,   ol ul menu,   ol menu menu,   ol dir menu,
ol ol dir,    ol ul dir,    ol menu dir,    ol dir dir,
ul ol ul,     ul ul ul,     ul menu ul,     ul dir ul,
ul ol menu,   ul ul menu,   ul menu menu,   ul dir menu,
ul ol dir,    ul ul dir,    ul menu dir,    ul dir dir,
menu ol ul,   menu ul ul,   menu menu ul,   menu dir ul,
menu ol menu, menu ul menu, menu menu menu, menu dir menu,
menu ol dir,  menu ul dir,  menu menu dir,  menu dir dir,
dir ol ul,    dir ul ul,    dir menu ul,    dir dir ul,
dir ol menu,  dir ul menu,  dir menu menu,  dir dir menu,
dir ol dir,   dir ul dir,   dir menu dir,   dir dir dir {
  list-style-type: square;
}
~~~
... 다음으로 대체 가능 :
~~~css
/* 3-deep (또는 그 이상) 정렬되지 않은 목록은 사각형 사용 */
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) ul,
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) menu,
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) dir {
  list-style-type: square;
}
~~~

### Simplifying section selectors (섹션 선택기 단순화)
``:is()`` 의사 클래스는 HTML5 섹션과 제목을 다룰 때 특히 유용합니다. ``<section>``, ``<article>``, ``<aside>`` 및 ``<nav>``는 일반적으로 ``:is()``없이 함께 중첩되므로 서로 일치하도록 스타일을 지정하는 것이 까다로울 수 있습니다.

예를 들어 ``:is()``가 없으면 모든 ``<h1>`` 요소를 다른 깊이로 스타일링하는 것은 매우 복잡 할 수 있습니다.
~~~css
/* Level 0 */
h1 {
  font-size: 30px;
}
/* Level 1 */
section h1, article h1, aside h1, nav h1 {
  font-size: 25px;
}
/* Level 2 */
section section h1, section article h1, section aside h1, section nav h1,
article section h1, article article h1, article aside h1, article nav h1,
aside section h1, aside article h1, aside aside h1, aside nav h1,
nav section h1, nav article h1, nav aside h1, nav nav h1 {
  font-size: 20px;
}
/* Level 3 */
/* ... don't even think about it! */
~~~

하지만 ``:is()``를 사용하면 훨씬 쉽습니다.

~~~css
/* Level 0 */
h1 {
  font-size: 30px;
}
/* Level 1 */
:is(section, article, aside, nav) h1 {
  font-size: 25px;
}
/* Level 2 */
:is(section, article, aside, nav)
:is(section, article, aside, nav) h1 {
  font-size: 20px;
}
/* Level 3 */
:is(section, article, aside, nav)
:is(section, article, aside, nav)
:is(section, article, aside, nav) h1 {
  font-size: 15px;
}
~~~

### Difference between :is() and :where() (: is ()와 : where ()의 차이점)
둘 사이의 차이점은 ``:is()``는 전체 선택 자의 특이성 (가장 구체적인 인수의 특이성을 취함)에 포함되는 반면, ``:where()``는 0의 특이성 값을 갖는다는 것입니다. [:where()](https://developer.mozilla.org/en-US/docs/Web/CSS/:where#examples) 참조 페이지.

## Syntax
~~~css
:is( <complex-selector-list> )where <complex-selector-list> = <complex-selector>#where <complex-selector> = <compound-selector> [ <combinator>? <compound-selector> ]*where <compound-selector> = [ <type-selector>? <subclass-selector>* [ <pseudo-element-selector> <pseudo-class-selector>* ]* ]!<combinator> = '>' | '+' | '~' | [ '||' ]where <type-selector> = <wq-name> | <ns-prefix>? '*'<subclass-selector> = <id-selector> | <class-selector> | <attribute-selector> | <pseudo-class-selector><pseudo-element-selector> = ':' <pseudo-class-selector><pseudo-class-selector> = ':' <ident-token> | ':' <function-token> <any-value> ')'where <wq-name> = <ns-prefix>? <ident-token><ns-prefix> = [ <ident-token> | '*' ]?  | <id-selector> = <hash-token><class-selector> = '.' <ident-token><attribute-selector> = '[' <wq-name> ']' | '[' <wq-name> <attr-matcher> [ <string-token> | <ident-token> ] <attr-modifier>? ']'where <attr-matcher> = [ '~' |  |  | '^' | '$' | '*' ]? '='<attr-modifier> = i | s
~~~

[내용출처 MDN :is()](https://developer.mozilla.org/en-US/docs/Web/CSS/:is)