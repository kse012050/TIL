# sibling-index()
__``brothers-index()``__ CSS 함수는 DOM 트리에서 현재 요소의 위치를 모든 형제 요소 대비 상대적인 정수로 반환합니다. 반환값은 부모 요소 내의 모든 형제 요소 중에서 컨텍스트 자식 요소의 위치를 나타내는 인덱스 번호이며, 첫 번째 자식 요소는 1을 반환하고 마지막 자식 요소는 Element.children.length를 반환합니다.

## Try it
[예시](https://developer.mozilla.org/en-US/docs/Web/CSS/sibling-index#try_it)

## Syntax
~~~css
li {
    width: calc(sibling-index() * 100px);
}
~~~

### Parameters
``brothers-index()`` 함수는 매개변수를 허용하지 않습니다.

### Return value
정수; DOM 트리의 형제 순서에서 현재 요소의 위치입니다.

## Examples
### 동적 목록 너비
이 예제는 ``<ul>``에 있는 각 ``<li>`` 항목의 너비를 ``50px``씩 동적으로 늘리는 방법을 보여줍니다.
#### HTML
~~~html
<ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
</ul>
~~~
#### CSS
~~~css
li {
    width: calc(sibling-index() * 50px);
    background-color: #ffaaaa;
}
~~~
#### Results
![./images/sibling-index() 결과 이미지](./images/sibling-index()01.PNG)

#### 순서 있는 목록
이 예제는 ``<ol>`` 요소를 사용하지 않고 ``brothers-index()``를 사용하여 순서 있는 목록을 만드는 방법을 보여줍니다. 맥락에 가장 의미 있는 요소를 사용하세요. 이 예제는 HTML을 변경할 수 없을 때 CSS를 사용하여 무엇을 할 수 있는지 보여주기 위해 포함되었습니다.

### 순차적 애니메이션
``sibling-index()``를 CSS 애니메이션과 결합하면 새로운 가능성이 열립니다. 이 예제에서는 DOM에서 요소의 순서에 따라 ``animation-delay``를 설정하여 순차적으로 요소의 불투명도를 조정합니다.

#### HTML
우리는 4개의 자식 요소를 포함하는 컨테이너 요소를 포함합니다:
~~~html
<ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
</ul>
~~~

#### CSS
각 요소에 ``페이드인`` 애니메이션을 적용합니다. ``calc()`` 함수 내에서 ``sibling-index()`` 함수를 사용하여 소스 순서에서 소스 요소의 위치를 기준으로 ``애니메이션 지연 시간``을 설정합니다. ``animation-fill-mode``는 ``애니메이션 지속 시간``이 만료될 때까지 애니메이션의 0% 키프레임을 적용합니다.
~~~css
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    animation-name: fade-in;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    animation-fill-mode: backwards;
    animation-delay: calc(1s * sibling-index());
}

@keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
~~~

#### Results
사이트에서 확인

[내용출처 css 순서.. 드디어?!](https://developer.mozilla.org/en-US/docs/Web/CSS/sibling-index)