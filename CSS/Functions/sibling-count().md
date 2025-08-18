# sibling-count()
``sibling-count()`` CSS 함수는 해당 함수가 사용되는 부모 요소의 직계 자식 DOM 요소의 총 개수를 나타내는 정수를 반환합니다.

> __참고__: counter() 함수는 비슷한 결과를 제공하지만 ``<string>``을 반환하는 반면, ``sibling-count()``는 계산에 사용할 수 있는 ``<integer>``를 반환합니다.

## Syntax
~~~css
--total-sibling-elements: sibling-count();
~~~

### Parameters
``sibling-count()`` 함수는 매개변수를 받지 않습니다.

### Return value
정수. 직계 자식 DOM 요소의 총 개수입니다.

## Examples
### 동적 열 개수
이 예제는 컨테이너의 열 개수를 자식 요소의 개수와 같게 설정하여 각 자식 요소를 별도의 열에 배치하는 방법을 보여줍니다.

#### HTML
``<ul>`` 컨테이너와 여러 개의 ``<li>`` 요소 자식 요소를 포함합니다.
~~~html
<ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
</ul>
~~~

#### CSS
컨테이너의 ``열 개수``를 컨테이너에 포함된 직계 자식 요소의 개수와 같게 설정합니다. 또한 결과 효과를 더 잘 보여주기 위해 모든 홀수 요소에`` 배경색``을 설정합니다.
~~~css
ul {
    column-count: sibling-count();
    text-align: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li:nth-of-type(odd) {
    background-color: rgb(0 0 0 / 0.05);
}
~~~

#### Results
![./images/sibling-count() 결과 이미지](./images/sibling-count()01.PNG)

[내용출처 총 갯수](https://developer.mozilla.org/en-US/docs/Web/CSS/sibling-count)