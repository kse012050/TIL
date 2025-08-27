# ::scroll-marker-group
__``::scroll-marker-group``__ ``CSS 가상 요소``는 스크롤 컨테이너 내부에서 생성되며 ``스크롤 컨테이너``의 자손에서 생성된 모든 ``::scroll-marker`` 가상 요소를 포함합니다.

## Syntax
~~~css
::scroll-marker-group {
    /* ... */
}
~~~

### Description
스크롤 컨테이너의 __``::scroll-marker-group``__ 가상 요소는 __스크롤 마커 그룹__ 을 나타냅니다. 이 컨테이너는 자신 또는 그 하위 요소에 생성된 ``::scroll-marker`` 가상 요소를 자동으로 포함합니다. 이를 통해 스크롤 마커를 그룹으로 배치하고 배치할 수 있으며, 일반적으로 CSS 캐러셀을 만들 때 스크롤 위치 표시기를 제공하는 데 사용됩니다. 개별 스크롤 마커는 연결된 콘텐츠 항목으로 이동하는 데 사용할 수 있습니다.  
  
``::scroll-marker-group`` 가상 요소가 생성되려면 스크롤 컨테이너의 ``scroll-marker-group`` 속성을 ``none``이 아닌 값으로 설정해야 합니다. ``scroll-marker-group`` 값은 캐러셀의 탭 순서 및 레이아웃 상자 순서(DOM 구조는 아님)에서 스크롤 마커 그룹이 나타나는 위치를 결정합니다. ``before``는 스크롤 마커 그룹을 시작 위치에 배치하고, ``after``는 스크롤 마커 그룹을 마지막 위치에 배치합니다.  
  
스크롤 마커 그룹의 시각적 렌더링 위치를 탭 순서와 일치시키는 것이 가장 좋습니다. 콘텐츠 시작 위치에 그룹을 배치할 때는 ``before``를 사용하여 탭 순서의 시작 위치에 배치합니다. 그룹을 콘텐츠 끝에 배치할 때는 ``after``를 사용하여 탭 순서의 끝에 배치하세요.  
  
접근성 측면에서 스크롤 마커 그룹과 포함된 스크롤 마커는 탭 ``목록/탭`` 시맨틱으로 렌더링됩니다. Tab 키를 눌러 그룹으로 이동하면 단일 항목처럼 동작합니다(즉, Tab 키를 다시 누르면 그룹을 지나 다음 항목으로 이동). 또한 좌우(또는 상하) 커서 키를 사용하여 여러 스크롤 마커 사이를 이동할 수 있습니다.


## Examples
``::scroll-marker`` 가상 요소를 사용하는 다른 예제는 ``CSS 캐러셀 만들기``를 참조하세요.

### 캐러셀 스크롤 마커 만들기
이 데모는 각 항목이 전체 페이지를 차지하는 단일 페이지 캐러셀입니다. 사용자가 마커를 클릭하여 원하는 페이지로 이동할 수 있도록 스크롤 마커를 포함했습니다.

#### HTML
HTML은 ``순서 없는 목록``으로 구성되며, ``각 목록`` 항목에는 몇 가지 샘플 콘텐츠가 포함되어 있습니다.
~~~html
<ul>
    <li>
        <h2>Page 1</h2>
    </li>
    <li>
        <h2>Page 2</h2>
    </li>
    <li>
        <h2>Page 3</h2>
    </li>
    <li>
        <h2>Page 4</h2>
    </li>
</ul>
~~~

#### CSS
먼저 ``<ul>`` 요소를 캐러셀로 변환합니다. ``display`` 속성을 ``flex``로 설정하고, ``<li>`` 요소로 이루어진 단일 비래핑 행을 생성합니다. ``overflow-x`` 속성을 ``auto``로 설정합니다. 즉, 항목이 x축에서 컨테이너를 넘치면 콘텐츠가 가로로 스크롤됩니다. 그런 다음 ``<ul>`` 요소를 ``scroll-snap 컨테이너``로 변환하여, ``scroll-snap-type`` 값을 ``mandatory``로 설정하여 컨테이너가 스크롤될 때 항목이 항상 제자리에 고정되도록 합니다.
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
다음으로, ``<li>`` 요소의 스타일을 지정하고 ``flex`` 속성을 사용하여 컨테이너 너비의 ``100%``를 차지하도록 합니다. ``start`` 속성의 ``scroll-snap-align`` 값은 콘텐츠가 스크롤될 때 가장 왼쪽에 보이는 항목의 왼쪽 면이 컨테이너의 왼쪽 가장자리에 맞춰지도록 합니다.
~~~css
li {
    list-style-type: none;
    background-color: #eeeeee;
    flex: 0 0 100%;
    height: 200px;
    padding-top: 20px;
    scroll-snap-align: start;
    text-align: center;
}
~~~
다음으로, 목록의 ``scroll-marker-group`` 속성이 ``after``로 설정되어 ``::scroll-marker-group`` 가상 요소가 탭 순서와 레이아웃 상자 순서에서 목록의 DOM 콘텐츠 뒤에 배치됩니다. 즉, 스크롤 버튼 뒤에 옵니다.
~~~css
ul {
    scroll-marker-group: after;
}
~~~
다음으로, 목록의 ``::scroll-marker-group`` 가상 요소는 flexbox를 사용하여 배치되고, ``justify-content`` 값은 ``center``이고 ``간격``은 ``20px``입니다. 이렇게 하면 자식 요소(``::scroll-marker`` 가상 요소)가 ``::scroll-marker-group`` 내부의 중앙에 배치되고 각 요소 사이에 간격이 생깁니다.
~~~css
ul::scroll-marker-group {
    display: flex;
    justify-content: center;
    gap: 20px;
}
~~~
다음으로, 스크롤 마커 자체의 스타일을 지정합니다. 각 스크롤 마커의 모양은 ``width``, ``height``, ``background-color``, ``border``, ``border-radius``를 설정하여 조정하지만, content 속성에도 ``none``이 아닌 값을 설정해야 실제로 생성됩니다.
~~~css
li::scroll-marker {
    width: 16px;
    height: 16px;
    background-color: transparent;
    border: 2px solid black;
    border-radius: 50%;
    content: "";
}
~~~
> __참고__: 생성된 콘텐츠는 기본적으로 인라인입니다. 스크롤 마커는 플렉스 항목으로 배치되므로 ``너비``와 ``높이``를 적용할 수 있습니다.  
  
마지막으로, ``:target-current`` 가상 클래스를 사용하여 현재 표시된 "페이지"에 해당하는 스크롤 마커를 선택하여 사용자가 콘텐츠를 얼마나 스크롤했는지 강조 표시합니다. 이 경우 ``배경색``을 ``검은색``으로 설정하여 채워진 원으로 스타일을 적용했습니다.
~~~css
li::scroll-marker:target-current {
    background-color: black;
}
~~~
#### Result
[공식 문서 예제 확인](https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-marker-group)  

### anchor-positioning을 사용하여 스크롤 마커 그룹 위치 지정
이 예제는 이전 예제를 확장하여 ``CSS 앵커 위치`` 지정을 사용하여 스크롤 마커 그룹을 캐러셀을 기준으로 배치하는 방법을 보여줍니다.

#### CSS
목록의 ``::scroll-marker-group`` 가상 요소는 CSS 앵커 위치 지정을 사용하여 캐러셀을 기준으로 배치됩니다. 즉, 그룹에 ``<ul>``의 ``앵커 이름``과 일치하는 ``position-anchor`` 값을 지정합니다. 그런 다음 ``anchor()`` 함수를 포함하는 ``top`` 값을 설정하여 블록 방향으로 스크롤 컨테이너를 기준으로 그룹을 배치합니다. 또한 ``justify-self`` 값인 ``anchor-center``를 추가하여 그룹을 인라인 방향으로 스크롤 컨테이너의 중앙에 정렬합니다.
~~~css
ul {
    anchor-name: --my-carousel;
}

ul::scroll-marker-group {
    /* 이전 예제에서 */
    display: flex;
    gap: 20px;

    position: absolute;
    position-anchor: --my-carousel;
    top: calc(anchor(bottom) - 70px);
    justify-self: anchor-center;
}
~~~


#### Result
[공식 문서 예제 확인](https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-marker-group)  
  
[내용출처 MDN css slider pager](https://developer.mozilla.org/en-US/docs/Web/CSS/::scroll-marker-group)