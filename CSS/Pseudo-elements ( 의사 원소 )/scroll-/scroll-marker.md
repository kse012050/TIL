# ::scroll-marker
``::scroll-marker`` ``CSS 가상 요소``는 모든 요소 내부에 생성될 수 있으며, 해당 요소의 스크롤 마커를 나타냅니다. 모든 요소는 ``::scroll-marker`` 가상 요소를 가질 수 있으며, 이 요소는 가장 가까운 스크롤 컨테이너 상위 요소의 ``::scroll-marker-group`` 에 배치됩니다. 스크롤 마커는 앵커(``<a>`` 요소)처럼 동작하며, 스크롤 대상이 마커의 원래 요소인 앵커는 활성화되면 스크롤 컨테이너를 해당 요소로 스크롤합니다.

## Syntax
~~~css
::scroll-marker {
    /* ... */
}
~~~

## Description
``::scroll-marker``는 ``::scroll-marker``의 ``content`` 속성이 none이 아닌 값으로 설정되고, 해당 요소에 none이 아닌 ``scroll-marker-group`` 속성 값을 가진 조상 스크롤 컨테이너가 있는 경우(즉, ``::scroll-marker-group`` 가상 요소가 생성됨을 의미)에 생성됩니다.  
  
스크롤 컨테이너의 ``::scroll-marker-group`` 가상 요소는 스크롤 컨테이너 또는 그 하위 요소에 생성된 ``::scroll-marker`` 가상 요소를 자동으로 포함합니다. 이를 통해 가상 요소를 그룹으로 배치하고 배치할 수 있으며, 일반적으로 CSS 캐러셀을 만들어 스크롤 위치 표시기를 만들 때 사용됩니다. 개별 스크롤 마커는 연결된 콘텐츠 항목으로 이동하는 데 사용할 수 있습니다.  
  
접근성 측면에서 스크롤 마커 그룹과 포함된 스크롤 마커는 탭 ``목록/탭`` 시맨틱을 사용하여 렌더링됩니다. Tab 키를 눌러 그룹으로 이동하면 해당 항목이 단일 항목처럼 작동합니다(즉, Tab 키를 다시 누르면 그룹을 지나 다음 항목으로 이동함). 좌우(또는 상하) 커서 키를 사용하여 다른 스크롤 마커 사이를 이동할 수 있습니다.

## Examples
``::scroll-marker`` 가상 요소를 사용하는 다른 예제는 ``CSS 캐러셀 만들기``를 참조하세요.

### 캐러셀 스크롤 마커 만들기
이 예제에서는 CSS 캐러셀에 스크롤 마커를 만드는 방법을 보여줍니다.

#### HTML
여러 개의 ``<li>`` 목록 항목이 있는 기본 HTML ``<ul>`` 목록이 있습니다.
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
``<ul>`` 요소를 스크롤 스냅 오버플로 컨테이너로 변환합니다. ``display`` 속성을 ``flex``로 설정하고, ``<li>`` 요소로 이루어진 단일 비래핑 행을 생성합니다. ``overflow-x`` 속성을 auto로 설정합니다. 즉, 항목이 x축에서 컨테이너를 넘치면 콘텐츠가 가로로 스크롤됩니다. 그런 다음 ``<ul>`` 요소를 ``스크롤 스냅 컨테이너``로 변환하여, ``scroll-snap-type`` 값을 ``mandatory``로 설정하여 컨테이너가 스크롤될 때 항목이 항상 제자리에 스냅되도록 합니다.  
  
``scroll-marker-group`` 속성을 사용하여 스크롤 마커 그룹을 생성하고, 모든 콘텐츠 뒤에 그룹을 배치합니다.
~~~css
ul {
    display: flex;
    gap: 4vw;
    padding-left: 0;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scroll-marker-group: after;
}
~~~
다음으로, ``<li>`` 요소의 스타일을 지정하고 ``flex`` 속성을 사용하여 컨테이너 너비의 ``33%``를 차지하도록 합니다. ``start`` 속성의 ``scroll-snap-align`` 값은 콘텐츠가 스크롤될 때 가장 왼쪽에 보이는 항목의 왼쪽 면이 컨테이너의 왼쪽 가장자리에 맞춰지도록 합니다.
~~~css
li {
    list-style-type: none;
    background-color: #eeeeee;
    flex: 0 0 33%;
    height: 100px;
    padding-top: 20px;
    scroll-snap-align: start;
    text-align: center;
}
~~~
그런 다음 ``::scroll-marker`` 가상 요소를 사용하여 빨간색 테두리가 있는 각 목록 항목에 대한 정사각형 마커를 만듭니다.
~~~css
li::scroll-marker {
    content: "";
    border: 1px solid red;
    height: 1em;
    width: 1em;
}
~~~
또한 ``::scroll-marker-group`` 가상 요소에 스타일을 적용하여 스크롤 마커를 행 중앙에 배치하고 각 마커 사이에 ``0.4em`` 간격을 둡니다.
~~~css
::scroll-marker-group {
    display: flex;
    gap: 0.4em;
    place-content: center;
}
~~~
마지막으로, 현재 스크롤된 요소의 마커를 다른 마커와 다르게 스타일링하여 ``:target-current`` 의사 클래스를 사용하여 해당 마커를 타겟팅합니다.
~~~css
::scroll-marker:target-current {
    background: red;
}
~~~

#### Result
[공식 문서 예제 확인](https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-marker)  

### 사용자 지정 스크롤 마커 번호 매기기 및 스타일
이 예제는 이전 예제와 동일하지만, 스크롤 마커에 다른 스타일을 적용하고 ``CSS 카운터``를 사용하여 각 마커에 표시되는 번호를 증가시켰습니다. CSS의 차이점은 다음 섹션에서 설명합니다.

#### CSS
이 예제에서는 ``counter-increment`` 속성을 사용하여 각 ``<li>``에 증가시킬 카운터의 이름(markers)을 설정합니다.
~~~css
li {
    counter-increment: markers;
}
~~~
그런 다음 ``::scroll-marker`` 가상 요소의 ``content`` 속성을 ``counter()`` 함수에 설정하고, ``마커 ``카운터 이름을 인수로 전달합니다. 이렇게 하면 각 마커에 자동으로 증가하는 숫자가 삽입되는 효과가 있습니다. 나머지 스타일은 기초적이지만, 마커에 완전한 스타일을 적용하는 방법을 보여줍니다.

~~~css
li::scroll-marker {
    content: counter(markers);
    font-family: sans-serif;
    width: fit-content;
    height: 1em;
    padding: 5px;
    color: black;
    text-decoration: none;
    border: 2px solid rgb(0 0 0 / 0.15);
    border-radius: 0.5em;
    background-color: #eeeeee;
}
~~~
또 다른 흥미로운 사용자 지정 기능으로, 첫 번째와 마지막 목록 항목의 마커를 선택하는 두 가지 규칙을 추가합니다. 선택자 체인에 각각 ``:first-child``와 ``:last-child``를 삽입합니다. 첫 번째 마커 텍스트 콘텐츠에는 "First"를, 마지막 마커 텍스트 콘텐츠에는 "Last"를 지정합니다.

~~~css
li:first-child::scroll-marker {
    content: "First";
}

li:last-child::scroll-marker {
    content: "Last";
}
~~~
사용자 경험을 개선하기 위해 ``:hover``의 마커에 다른 색상을 설정하고 ``:target-current`` 의사 클래스를 사용하여 현재 스크롤된 요소의 마커에 다른 ``색상``과 ``배경색``을 설정하여 사용자가 현재 어떤 항목이 보이는지 알 수 있도록 했습니다.
~~~css
::scroll-marker:hover {
    background-color: #ddcccc;
}

::scroll-marker:target-current {
    background-color: purple;
    color: white;
}
~~~

#### Result
[공식 문서 예제 확인](https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-marker)  
  
[내용출처 MDN css slider pager](https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-marker)