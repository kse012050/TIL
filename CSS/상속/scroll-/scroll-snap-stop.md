# scroll-snap-stop
__``scroll-snap-stop``__ CSS 속성은 스크롤 컨테이너가 가능한 스냅 위치를 "넘어갈" 수 있는지 여부를 정의합니다.

## Try it
[예제 내용 확인](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-stop)  

## Syntax
~~~css
/* Keyword values */
scroll-snap-stop: normal;
scroll-snap-stop: always;

/* Global values */
scroll-snap-stop: inherit;
scroll-snap-stop: initial;
scroll-snap-stop: revert;
scroll-snap-stop: revert-layer;
scroll-snap-stop: unset;
~~~

## Values
### normal
이 요소의 스크롤 컨테이너의 시각적 뷰포트가 스크롤될 때 가능한 스냅 위치를 "지나갈" 수 있습니다.

### always
스크롤 컨테이너는 가능한 스냅 위치를 "지나가지" 않아야 하며, 이 요소의 첫 번째 스냅 위치에 스냅되어야 합니다.

## Examples
### 다양한 스냅 스톱 설정하기
아래 예시는 ``scroll-snap-stop``의 ``always`` 값과 ``normal`` 값의 차이를 보여줍니다. 두 ``scroll-snap-stop`` 값의 차이는 이 예시에서 사용된 ``scroll-snap-type`` 속성을 ``mandatory``로 설정하면 더욱 두드러집니다.

#### HTML
~~~html
<p>scroll-snap-stop: always (X Mandatory)</p>
<div class="x mandatory-scroll-snapping always-stop">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
</div>

<p>scroll-snap-stop: always (X Mandatory) on odd child elements</p>
<div class="x mandatory-scroll-snapping always-stop-odd">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
</div>

<p>scroll-snap-stop: always (X Mandatory) on even child elements</p>
<div class="x mandatory-scroll-snapping always-stop-even">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
</div>

<p>scroll-snap-stop: normal (X Mandatory)</p>
<div class="x mandatory-scroll-snapping normal-stop">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
</div>

<p>scroll-snap-stop: always (Y Mandatory)</p>
<div class="y mandatory-scroll-snapping always-stop">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
</div>

<p>scroll-snap-stop: normal (Y Mandatory)</p>
<div class="y mandatory-scroll-snapping normal-stop">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
</div>
~~~

#### CSS
~~~css
/* 부모 요소에 필수 스크롤 스냅 설정 */
.x.mandatory-scroll-snapping {
    scroll-snap-type: x mandatory;
}

.y.mandatory-scroll-snapping {
    scroll-snap-type: y mandatory;
}

/* 자식 요소에 스크롤 스냅 정렬 정의 */
div > div {
    scroll-snap-align: center;
}

/* 자식 요소에 스크롤 스냅 중지 정의 */
.always-stop > div {
    scroll-snap-stop: always;
}

.always-stop-odd > div:nth-of-type(odd) {
    scroll-snap-stop: always;
}

.always-stop-even > div:nth-of-type(even) {
    scroll-snap-stop: always;
}

.normal-stop > div {
    scroll-snap-stop: normal;
}
~~~

#### Result
아래 X 및 Y 상자에서 각각 왼쪽에서 오른쪽으로, 위에서 아래로 스크롤합니다. ``scroll-snap-stop`` 속성이 ``always``로 설정된 X 및 Y 상자에서는 빠르게 스크롤하더라도 스크롤이 스냅 지점에서 강제로 멈춥니다. 그러나 ``scroll-snap-stop`` 속성이 ``normal``로 설정된 상자에서는 빠르게 스크롤할 때 스냅 지점을 건너뜁니다.  
  
필요한 경우 스크롤 컨테이너 내에서 ``항상`` 멈춘 항목을 선택적으로 지정할 수 있습니다. 아래 예에서는 홀수 및 짝수 항목을 대상으로 지정하여 이를 확인할 수 있습니다. 필요에 따라 다른 전략을 선택할 수 있습니다. 아래 예에서는 두 번째 및 세 번째 상자에서 스크롤이 각각 홀수 및 짝수 항목을 "넘어가지" 않습니다.  
  
  
[예제 내용 확인](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-stop)  
  
[내용출처 MDN 모바일, 테블릿 scroll 한번에 넘길 수 있는 범위](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-stop)