# gap (grid-gap)
CSS __``gap``__ 속성은 행과 열 사이의 간격(거터)을 설정합니다. [row-gap (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap)과 [column-gap (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)의 [단축 속성](https://developer.mozilla.org/ko/docs/Web/CSS/Shorthand_properties)입니다.  
  
> 원래 [CSS Grid Layout](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout)은 접두사를 붙인 ``grid-gap`` 속성을 정의했었으며, 현재 ``gap``으로 대체하는 과정 중에 있습니다. 그러나 ``grid-gap``만 구현하고 그리드 레이아웃용 ``gap``은 구연하지 않은 브라우저를 지원하려면 위의 대화형 예제처럼 접두사 속성을 사용해야 합니다.

## 구문
~~~css
/* 단일 <length> 값 */
gap: 20px;
gap: 1em;
gap: 3vmin;
gap: 0.5cm;

/* 단일 <percentage> 값 */
gap: 16%;
gap: 100%;

/* 이중 <length> 값 */
gap: 20px 10px;
gap: 1em 0.5em;
gap: 3vmin 2vmax;
gap: 0.5cm 2mm;

/* 이중 또는 혼합 <percentage> 값 */
gap: 16% 100%;
gap: 21px 82%;

/* calc() 값 */
gap: calc(10% + 20px);
gap: calc(20px + 10%) calc(10% - 5px);

/* 전역 값 */
gap: inherit;
gap: initial;
gap: unset;
~~~

``gap``은 ``<'row-gap'>`` 값을 사용해 지정하며, 선택적으로 ``<'column-gap'>``을 추가할 수 있습니다. ``<'column-gap'>``을 생략한 경우 ``<'row-gap'>``과 동일한 값을 사용합니다.

``<'row-gap'>``과 ``<'column-gap'>``은 각각 ``<length>`` 또는 ``<percentage>``를 사용해 지정합니다.

### 값

#### ``<length>``
그리드 선을 분할하는 간격의 너비.

#### ``<percentage>``
그리드 선을 분할하는 간격의 너비. 요소 크기에 상대적입니다.

### 형식 구문
> [<'row-gap'> (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap) [<'column-gap'> (en-US)?](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap) [(en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/Value_definition_syntax#question_mark_())

## 예제

### 플렉스 레이아웃

#### HTML
~~~html
<div id="flexbox">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>
~~~

#### CSS
~~~css
#flexbox {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    gap: 20px 5px;
}

#flexbox > div {
    border: 1px solid green;
    background-color: lime;
    flex: 1 1 auto;
    width: 100px;
    height: 50px;

}
~~~

#### 결과
![gap 예제 이미지](./images/gap(grid-gap)-result-img01.PNG)

### 그리드 레이아웃

#### HTML
~~~html
<div id="grid">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>
~~~

#### CSS
~~~css
#grid {
    display: grid;
    height: 200px;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    gap: 20px 5px;
}

#grid > div {
    border: 1px solid green;
    background-color: lime;
}
~~~
![gap 예제 이미지](./images/gap(grid-gap)-result-img02.PNG)

### 다열 레이아웃

#### HTML
~~~html
<p class="content-box">
    This is some multi-column text with a 40px column
    gap created with the CSS <code>gap</code> property.
    Don't you think that's fun and exciting? I sure do!
</p>
~~~

#### CSS
~~~css
.content-box {
    column-count: 3;
    gap: 40px;
}
~~~
![gap 예제 이미지](./images/gap(grid-gap)-result-img03.PNG)

## 브라우저 호환성
MDN 참조

[내용출처 MDN CSS gap](https://developer.mozilla.org/ko/docs/Web/CSS/gap)
