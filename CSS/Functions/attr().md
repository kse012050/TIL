# attr()
> __참고__: attr() 함수는 모든 CSS 속성과 함께 사용할 수 있지만, content 외의 속성에 대한 지원은 실험 중입니다.  
  

__``attr()``__ CSS 함수는 선택된 요소의 속성 값을 가져와 속성 값에 사용하는 데 사용됩니다. 이는 ``var()`` 함수가 사용자 지정 속성 값을 대체하는 방식과 유사합니다. 또한, 가상 요소와 함께 사용할 수 있으며, 이 경우 가상 요소의 원래 요소에 있는 속성 값이 반환됩니다.

## Try it
[예시 데모](https://developer.mozilla.org/en-US/docs/Web/CSS/attr#try_it)

## Syntax
~~~css
/* 기본 사용법 */
attr(data-count)
attr(href)

/* 유형 포함 */
attr(data-width px)
attr(data-size rem)
attr(data-name raw-string)
attr(id type(<custom-ident>))
attr(data-count type(<number>))
attr(data-size type(<length> | <percentage>))

/* 대체 사용 */
attr(data-count type(<number>), 0)
attr(data-width px, inherit)
attr(data-something, "default")
~~~

### Parameters
attr() 함수의 구문은 다음과 같습니다.
~~~css
attr(<attr-name> <attr-type>? , <fallback-value>?)
~~~

매개변수는 다음과 같습니다.

#### ``<attr-name>``
선택한 HTML 요소에서 값을 가져올 속성 이름입니다.

#### ```<attr-type>```
속성 값이 CSS 값으로 파싱되는 방식을 지정합니다. raw-string 키워드, type() 함수 또는 CSS 차원 단위(<attr-unit> 식별자를 사용하여 지정)를 사용할 수 있습니다. 생략하면 기본적으로 raw-string으로 설정됩니다.

- raw-string 키워드는 속성의 리터럴 값을 CSS 문자열 값으로 처리하며, CSS 파싱(CSS 이스케이프, 공백 제거, 주석 등)은     수행되지 않습니다. ``<fallback-value>``는 속성이 생략된 경우에만 사용되며, 빈 값을 지정하면 폴백이 트리거되지 않습니다.
    ~~~css
    attr(data-name raw-string, "stranger")
    ~~~
    > __참고__: 이 키워드는 원래 Chromium 브라우저에서 문자열로 명명되어 지원되었습니다. 두 키워드 모두 하위 호환성을 위해 잠시 지원될 예정입니다.
- type() 함수는 값을 어떤 데이터 유형으로 파싱할지 지정하는 <구문>을 인수로 받습니다.
``<angle>``, ``<color>``, ``<custom-ident>``, ``<image>``, ``<integer>``, ``<length>``, ``<length-percentage>``, ``<number>``, ``<percentage>``, ``<resolution>``, ``<string>``, ``<time>``, ``<transform-function>``, 또는 이들의 조합일 수 있습니다.
    ~~~ css
    attr(id type(<custom-ident>), none)
    attr(data-count type(<number>), 0)
    ~~~
    여러 유형을 허용하려면 type() 함수에서 허용되는 모든 <구문>을 |로 구분하여 나열합니다.
    ~~~css
    attr(data-size type(<length> | <percentage>), 0px)
    ~~~
    > __참고__: 보안상의 이유로 <url>은 <syntax>로 허용되지 않습니다.  
      
    모든 데이터 유형을 허용하려면 유형으로 *를 사용하세요. 이렇게 해도 CSS 파싱이 트리거되지만, 유효하게 파싱하고 파싱 결과를 ``<string>`` 값이 아닌 토큰으로 직접 대체한다는 점 외에는 다른 요구 사항이 없습니다.
    ~~~css
    attr(data-content type(*))
    ~~~
- ``<attr-unit>`` 식별자는 숫자 값의 단위를 지정합니다(있는 경우). ``%`` 문자(백분율) 또는 ``px``, ``rem``, ``deg``, ``s`` 등의 ``CSS 거리 단위``를 사용할 수 있습니다.
    ~~~css
    attr(data-size rem)
    attr(data-width px, inherit)
    attr(data-rotation deg)
    ~~~
#### ``<fallback-value>``
지정된 속성이 누락되었거나 잘못된 값을 포함하는 경우 사용할 값입니다.

### Return value
``attr()``의 반환 값은 이름이 ``<attr-name>``인 HTML 속성의 값으로, 주어진 ``<attr-type>``으로 파싱되거나 CSS 문자열로 파싱됩니다.  
  
``<attr-type>``이 설정되면 ``attr()``은 속성을 지정된 ``<attr-type>``으로 파싱하여 반환합니다. 속성을 주어진 ``<attr-type>``으로 파싱할 수 없는 경우, 대신 ``<fallback-value>``가 반환됩니다. ``<attr-type>``이 설정되지 않으면 속성은 CSS 문자열로 파싱됩니다.  
  
``<fallback-value>``가 설정되지 않은 경우, ``<attr-type>``이 설정되지 않은 경우 반환 값은 빈 문자열이 기본값이고, ``<attr-type>``이 설정된 경우 [guaranteed-invalid](https://developer.mozilla.org/en-US/docs/Glossary/guaranteed_invalid_value) 값이 기본값입니다.

## Description
### 제한 사항 및 보안
``attr()`` 함수는 페이지 작성자가 스타일 지정에 의도하지 않은 속성을 참조할 수 있으며, 민감한 정보(예: 페이지의 스크립트에서 사용하는 보안 토큰)를 포함할 수 있습니다. 일반적으로 이는 문제가 없지만 URL에 사용하면 보안 위협이 될 수 있습니다. 따라서 ``attr()`` 함수를 사용하여 URL을 동적으로 생성할 수 없습니다.
~~~html
<!-- 작동하지 않습니다! -->
<span data-icon="https://example.org/icons/question-mark.svg">도움말</span>
~~~
~~~css
span[data-icon] {
    background-image: url(attr(data-icon));
}
~~~
``attr()``을 사용하는 값은 ``attr()``에 오염된 것으로 표시됩니다. ``attr()``에 오염된 값을 ``<url>``에 사용하거나 ``<url>``에 사용하면 해당 선언은 ["계산된 값 시점에 유효하지 않음"](https://www.bram.us/2024/02/26/css-what-is-iacvt/), 즉 IACVT로 선언됩니다.

### 이전 버전과의 호환성
일반적으로 최신 ``attr()`` 구문은 이전 방식(``<attr-type>``을 지정하지 않고도)이 이전과 동일하게 동작하기 때문에 이전 버전과 호환됩니다. 코드에 attr(data-attr)을 사용하는 것은 ``attr(data-attr type(<string>))`` 또는 더 간단한 ``attr(data-attr string))``을 작성하는 것과 같습니다.  
  
하지만 최신 ``attr()`` 구문이 이전 구문과 다르게 동작하는 두 가지 예외적인 경우가 있습니다.  
  
다음 스니펫에서 최신 ``attr()`` 구문을 지원하지 않는 브라우저는 두 번째 선언을 파싱할 수 없기 때문에 해당 선언을 삭제합니다. 이러한 브라우저에서 결과는 ``"Hello World"``입니다.
~~~html
<div text="Hello"></div>
~~~
~~~css
div::before {
    content: attr(text) " World";
}
div::before {
    content: attr(text) 1px;
}
~~~
최신 구문을 지원하는 브라우저에서는 출력 결과가 '아무것도 없음'으로 표시됩니다. 이러한 브라우저에서는 두 번째 선언은 성공적으로 파싱되지만, content 속성에 유효하지 않은 콘텐츠이므로 선언은 ["계산된 값 시점에 유효하지 않음"](https://www.bram.us/2024/02/26/css-what-is-iacvt/), 즉 IACVT가 됩니다.  
  
이러한 상황을 방지하려면 기능 감지를 사용하는 것이 좋습니다.  
  
두 번째 예외 상황은 다음과 같습니다.
~~~html
<div id="parent"><div id="child" data-attr="foo"></div></div>
~~~
~~~css
#parent {
    --x: attr(data-attr);
}
#child::before {
    content: var(--x);
}
~~~
최신 구문을 지원하지 않는 브라우저는 ``"foo"``라는 텍스트를 표시합니다. 최신 ``attr()``을 지원하는 브라우저에서는 출력이 없습니다.  
  
이는 ``var()`` 함수를 사용하는 사용자 지정 속성과 유사하게 ``attr()``이 계산된 값의 대입 시점에 대입되기 때문입니다. 최신 동작 방식에서는 ``--x``가 먼저 ``#parent`` 요소에서 ``data-attr`` 속성을 읽으려고 시도하는데, ``#parent``에는 해당 속성이 없으므로 빈 문자열이 반환됩니다. 이 빈 문자열은 ``#child`` 요소에 상속되어 ``content: ;`` 선언이 설정됩니다.  
  
이러한 상황을 방지하려면 명시적으로 원하지 않는 한 상속된 ``attr()`` 값을 자식 요소에 전달하지 마십시오.

### 기능 감지
``@supports`` at-rule을 사용하여 최신 ``attr()`` 구문에 대한 기능 감지를 수행할 수 있습니다. 테스트에서는 (사용자 지정이 아닌) CSS 속성에 고급 ``attr()``을 할당해 보세요.  
  
예:
~~~css
@supports (x: attr(x type(*))) {
    /* 브라우저에서 최신 attr() 지원 */
}

@supports not (x: attr(x type(*))) {
    /* 브라우저에서 최신 attr() 지원이 없습니다 */
}
~~~
``CSS.supports()``를 사용하여 JavaScript에서 동일한 검사를 수행할 수 있습니다.
~~~js
if (CSS.supports("x: attr(x type(*))")) {
    /* 브라우저에서 최신 attr() 지원 */
}

if (!CSS.supports("x: attr(x type(*))")) {
    /* 브라우저에서 최신 attr() 지원 */
}
~~~

## Examples
### content 속성
이 예제에서는 ``data-foo`` ``data-*`` 전역 속성의 값을 ``<p>`` 요소의 내용 앞에 추가합니다.

#### HTML
~~~html
<p data-foo="hello">world</p>
~~~

#### CSS
~~~css
[data-foo]::before {
    content: attr(data-foo) " ";
}
~~~

#### Result
![attr()01 이미지](./images/attr()01.PNG)

### 대체 값 사용
> __실험적: 이 기술은 실험적인 기술입니다.__  
> 운영 환경에서 사용하기 전에 브라우저 호환성 표를 주의 깊게 확인하세요.  
  
이 예시에서는 ``<p>`` 요소에 ``data-browser`` ``data-*`` 전역 속성 값을 추가합니다. ``<p>`` 요소에 ``data-browser`` 속성이 없는 경우 대체 값인 __"Unknown"__ 을 추가합니다.

#### HTML
~~~html
<p data-browser="Firefox">My favorite browser is:</p>
<p>Your favorite browser is:</p>
~~~

#### CSS
~~~css
p::after {
    content: " " attr(data-browser, "Unknown");
    color: tomato;
}
~~~


#### Result
![attr()02 이미지](./images/attr()02.PNG)

### 색상 값
> __실험적: 이 기술은 실험적인 기술입니다.__  
> 실제 운영 환경에서 사용하기 전에 브라우저 호환성 표를 주의 깊게 확인하세요.  
  
이 예시에서는 ``background-color``의 CSS 값을 ``<div>`` 요소에 할당된 ``data-background`` ``data-*`` 전역 속성의 값으로 설정합니다.
#### HTML
~~~html
<div class="background" data-background="lime">
  background expected to be red if your browser does not support advanced usage
  of attr()
</div>
~~~
#### CSS
~~~css
play
.background {
    background-color: red;
}

.background[data-background] {
    background-color: attr(data-background type(<color>), red);
}
~~~

#### Result
![attr()03 이미지](./images/attr()03.PNG)

### 차원 단위 사용
> __실험적: 이 기술은 실험적인 기술입니다.__  
> 운영 환경에서 사용하기 전에 브라우저 호환성 표를 주의 깊게 확인하세요.  
  
이 예시에서 ``data-rotation`` 속성은 ``deg`` 단위로 분석되며, 이는 요소의 회전을 지정합니다.

#### HTML
~~~html
<div data-rotation="-3">I am rotated by -3 degrees</div>
<div data-rotation="2">And I by 2 degrees</div>
<div>And so am I, using the fallback value of 1.5deg</div>
~~~

#### CSS
~~~css
div {
    width: fit-content;
    transform-origin: 50% 50%;
    rotate: attr(data-rotation deg, 1.5deg);
}
~~~

#### Result
![attr()04 이미지](./images/attr()04.PNG)

### ``<custom-ident>``로 ``attr()`` 값 구문 분석
> __실험적: 이 기술은 실험적인 기술입니다.__  
> 운영 환경에서 사용하기 전에 브라우저 호환성 표를 주의 깊게 확인하세요.  
  
이 예시에서 ``view-transition-name`` 속성의 값은 요소의 id 속성에서 파생됩니다. 이 속성은 ``view-transition-name``이 값으로 받아들이는 ``<custom-ident``>로 파싱됩니다.  
  
``view-transition-name``의 결과 값은 ``card-1``, ``card-2``, ``card-3`` 등입니다.

#### HTML
HTML에는 서로 다른 ``id`` 속성을 가진 4개의 카드와 카드를 섞는 "Shuffle cards" ``<button>``이 포함되어 있습니다.
~~~HTML
<div class="cards">
    <div class="card" id="card-1">1</div>
    <div class="card" id="card-2">2</div>
    <div class="card" id="card-3">3</div>
    <div class="card" id="card-4">4</div>
</div>
<button>Shuffle cards</button>
~~~

#### CSS
카드는 플렉스 컨테이너에 배치됩니다.
~~~css
.cards {
    display: flex;
    flex-direction: row;
    gap: 1em;
    padding: 1em;
}
~~~
각 카드에서 ``attr()`` 함수는 id 속성을 가져와 ``<custom-ident>``로 파싱합니다. 이 ``<custom-ident>``는 ``view-transition-name`` 속성의 값으로 사용됩니다. 카드에 id가 설정되어 있지 않으면 대체 값인 ``none``이 대신 사용됩니다.

~~~css
.card {
    view-transition-name: attr(id type(<custom-ident>), none);
    view-transition-class: card;
}
~~~

#### JavaScript
``<button>``을 누르면 카드가 섞입니다. 이는 모든 카드에 대한 참조를 포함하는 배열의 순서를 무작위로 지정한 다음 각 카드의 ``order`` 속성을 새 배열 인덱스 위치로 업데이트하여 수행됩니다.  
  
각 카드를 새 위치로 이동시키기 위해 ``뷰 전환``을 사용합니다. 이는 ``document.startViewTransition``을 호출하여 순서 업데이트를 래핑하여 수행됩니다.

~~~js
const shuffle = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

document.querySelector("button").addEventListener("click", (e) => {
    const $cards = Array.from(document.querySelectorAll(".card"));
    shuffle($cards);
    document.startViewTransition(() => {
        $cards.forEach(($card, i) => {
            $card.style.setProperty("order", i);
        });
    });
});
~~~

#### Result
[결과](https://developer.mozilla.org/en-US/docs/Web/CSS/attr#parsing_attr_values_as_custom-idents)

[내용출처 MDN attr()](https://developer.mozilla.org/en-US/docs/Web/CSS/attr)