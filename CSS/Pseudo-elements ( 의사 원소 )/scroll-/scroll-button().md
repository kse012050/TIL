# scroll-button()
__``::scroll-button()``__ CSS 가상 요소는 스크롤 컨테이너의 스크롤을 제어하는 ​​버튼을 나타냅니다. 스크롤 컨테이너의 ``콘텐츠`` 값이 ``none``이 아닐 때 생성됩니다. 스크롤 방향은 매개변수 값에 따라 결정됩니다.

## Syntax
~~~css
::scroll-button(<scroll-button-direction>) {
    /* ... */
}
~~~

### Parameters
#### ``<scroll-button-direction>``
선택할 스크롤 버튼의 방향을 나타내는 값입니다. 다음 값을 사용할 수 있습니다.
##### *
원본 요소의 모든 스크롤 버튼을 선택하여 단일 규칙으로 각 버튼에 스타일을 적용할 수 있습니다.

##### down
콘텐츠를 아래로 스크롤하는 버튼을 선택합니다.

##### left
콘텐츠를 왼쪽으로 스크롤하는 버튼을 선택합니다.

##### right
콘텐츠를 오른쪽으로 스크롤하는 버튼을 선택합니다.

##### up
콘텐츠를 위로 스크롤하는 버튼을 선택합니다.

##### block-end
블록 끝 방향으로 콘텐츠를 스크롤하는 버튼을 선택합니다.

##### block-start
블록 시작 방향으로 콘텐츠를 스크롤하는 버튼을 선택합니다.

##### inline-end
인라인 끝 방향으로 콘텐츠를 스크롤하는 버튼을 선택합니다.

##### inline-start
인라인 시작 방향으로 콘텐츠를 스크롤하는 버튼을 선택합니다.  
  
이 사양은 ``next``와 ``prev``라는 두 가지 다른 값도 정의하지만, 현재 어떤 브라우저에서도 지원되지 않습니다.

## Description
``::scroll-button()`` 가상 요소는 콘텐츠 속성이 ``none`` 이외의 값으로 설정된 경우에만 ``스크롤 컨테이너`` 내부에 생성됩니다. 이 요소는 스크롤 컨테이너의 자식 DOM 요소 바로 앞의 자식 요소와 컨테이너에 생성된 ``::scroll-marker-group``의 형제 요소로 생성됩니다.  
  
스크롤 컨테이너당 최대 4개의 스크롤 버튼을 생성할 수 있으며, 이 버튼은 블록 및 인라인 축의 시작과 끝을 향해 콘텐츠를 스크롤합니다. 선택자의 인수는 선택된 스크롤 방향을 지정합니다. 또한 모든 ``::scroll-button()`` 가상 요소를 대상으로 하는 * 값을 지정하여 단일 규칙으로 모든 버튼에 스타일을 적용할 수 있습니다.  
  
생성된 버튼은 기본 브라우저 스타일을 공유하는 등 일반 ``<button>`` 요소와 동일하게 작동합니다. 포커스를 받고, 접근 가능하며, 일반 버튼처럼 활성화할 수 있습니다. 스크롤 버튼을 누르면 스크롤 컨테이너의 콘텐츠가 지정된 방향으로 한 "페이지" 또는 스크롤 컨테이너의 크기와 거의 같은 방향으로 스크롤됩니다. 이는 PgUp 및 PgDn 키를 누르는 것과 유사합니다.  
  
스크롤 컨테이너에 ``CSS 스크롤 스냅``을 설정하고 스크롤하려는 각 콘텐츠 항목을 스냅 대상으로 설정하는 것이 좋습니다. 이렇게 하면 스크롤 버튼을 활성화하면 콘텐츠가 한 "페이지" 떨어진 ``스냅 대상``으로 스크롤됩니다. 스크롤 스냅 없이도 스크롤 버튼은 작동하지만 원하는 효과를 얻지 못할 수 있습니다.  
  
특정 스크롤 버튼의 스크롤 방향으로 더 이상 스크롤할 수 없는 경우, 버튼은 자동으로 비활성화되고, 그렇지 않은 경우 활성화됩니다. ``:enabled`` 및 ``:disabled`` 의사 클래스를 사용하여 스크롤 버튼의 활성화 및 비활성화 상태를 스타일링할 수 있습니다.

## Examples
더 많은 회전형 캐러셀 예시를 보려면 ``CSS 회전형 캐러셀`` 만들기를 참조하세요.

### 스크롤 버튼 만들기
이 예제에서는 CSS 캐러셀에 스크롤 버튼을 만드는 방법을 보여줍니다.

#### HTML
여러 개의 ``<li>`` 목록 항목이 포함된 기본 HTML ``<ul>`` 목록이 있습니다.
~~~html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
    <li>Item 6</li>
    <li>Item 7</li>
    <li>Item 8</li>
</ul>
~~~

#### CSS
##### __캐러셀 스타일 지정__
``<ul>`` 요소를 캐러셀로 변환합니다. ``display`` 속성을 ``flex``로 설정하고, ``<li>`` 요소로 이루어진 단일 비래핑 행을 생성합니다. ``overflow-x ``속성을 ``auto``로 설정합니다. 즉, 항목이 x축에서 컨테이너를 넘치면 콘텐츠가 가로로 스크롤됩니다. 그런 다음 ``<ul> ``요소를 ``scroll-snap 컨테이너``로 변환하여, ``scroll-snap-type`` 값을 ``mandatory``로 설정하여 컨테이너가 스크롤될 때 항목이 항상 제자리에 고정되도록 합니다.
~~~css
ul {
    display: flex;
    gap: 4vw;
    padding-left: 0;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
}
~~~
다음으로, ``<li>`` 요소의 스타일을 지정하고 ``flex`` 속성을 사용하여 컨테이너 너비의 100%를 차지하도록 합니다. ``start`` 속성의 ``scroll-snap-align`` 값은 콘텐츠가 스크롤될 때 가장 왼쪽에 보이는 항목의 왼쪽 면이 컨테이너의 왼쪽 가장자리에 맞춰지도록 합니다.
~~~css
li {
  list-style-type: none;
  background-color: #eeeeee;
  flex: 0 0 100%;
  height: 100px;
  padding-top: 20px;
  scroll-snap-align: start;
  text-align: center;
}
~~~

##### 스크롤 버튼 만들기
먼저, 모든 스크롤 버튼은 몇 가지 기본적인 스타일과 다양한 상태에 따른 스타일을 적용합니다. 키보드 사용자를 위해 ``:focus`` 스타일을 설정하는 것이 중요합니다. 또한, 스크롤 버튼은 해당 방향으로 더 이상 스크롤할 수 없을 때 자동으로 ``비활성화``되므로, ``:disabled`` 의사 클래스를 사용하여 이 상태를 타겟팅합니다.
~~~css
ul::scroll-button(*) {
    border: 0;
    font-size: 2rem;
    background: none;
    color: black;
    opacity: 0.7;
    cursor: pointer;
}

ul::scroll-button(*):hover,
ul::scroll-button(*):focus {
    opacity: 1;
}

ul::scroll-button(*):active {
    translate: 1px 1px;
}

ul::scroll-button(*):disabled {
    opacity: 0.2;
    cursor: unset;
}
~~~
> __참고__: 스크롤 버튼에 ``커서`` 값을 ``포인터``로 설정하여 상호작용이 가능하다는 것을 더욱 명확하게 했으며(일반 ``UX``와 ``인지적 접근성 모두 개선``), 스크롤 버튼이 ``:disabled``로 설정되면 커서 값을 설정 해제했습니다.  
  
다음으로, ``content`` 속성을 통해 왼쪽과 오른쪽 스크롤 버튼에 적절한 아이콘이 설정됩니다. 이는 스크롤 버튼이 생성되는 원인이기도 합니다.

~~~css
ul::scroll-button(left) {
    content: "◄";
}

ul::scroll-button(right) {
    content: "►";
}
~~~
브라우저가 자동으로 적절한 접근 가능한 이름을 제공하므로 콘텐츠의 아이콘에 대한 대체 텍스트를 설정할 필요가 없습니다.

#### Result
[공식 문서 예제 확인](https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-button)  
캐러셀 왼쪽 하단에 스크롤 버튼이 어떻게 생성되는지 확인해 보세요. 버튼을 눌러서 콘텐츠가 어떻게 스크롤되는지 확인해 보세요.

### 스크롤 버튼 위치 지정
이전 예제는 작동하지만 버튼의 위치가 적절하지 않습니다. 이 섹션에서는 ``앵커 위치`` 지정을 사용하여 버튼의 위치를 ​​조정하는 CSS를 추가해 보겠습니다.

#### CSS
먼저, ``<ul>``에 참조 ``앵커 이름``을 설정하여 명명된 앵커로 정의합니다. 다음으로, 각 스크롤 버튼의 ``위치``를 ``​​absolute``로 설정하고, ``position-anchor`` 속성을 목록의 ``앵커 이름``으로 설정하여 ``두 앵커를 연결합니다``.
~~~css
ul {
    anchor-name: --my-carousel;
}

ul::scroll-button(*) {
    position: absolute;
    position-anchor: --my-carousel;
}
~~~
각 스크롤 버튼을 실제로 배치하려면 먼저 두 버튼 모두에 ``align-self`` 값을 anchor-center로 설정하여 회전형 메뉴의 중앙에 수직으로 배치합니다.

~~~css
ul::scroll-button(*) {
    align-self: anchor-center;
}
~~~
그런 다음 가로 위치 지정을 처리하기 위해 ``inset 속성``에 값을 설정합니다. ``anchor()`` 함수를 사용하여 캐러셀의 측면을 기준으로 버튼의 지정된 측면을 배치합니다. 각 경우 ``calc()`` 함수를 사용하여 버튼 가장자리와 캐러셀 가장자리 사이에 약간의 공간을 추가합니다. 예를 들어, 왼쪽 스크롤 버튼의 오른쪽 가장자리는 캐러셀의 왼쪽 가장자리에서 오른쪽으로 45픽셀 떨어진 곳에 배치됩니다.
~~~css
ul::scroll-button(left) {
    right: calc(anchor(left) - 45px);
}

ul::scroll-button(right) {
    left: calc(anchor(right) - 45px);
}
~~~
[공식 문서 예제 확인](https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-button)  
  
[내용출처 MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-button)