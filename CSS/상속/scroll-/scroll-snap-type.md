# scroll-snap-type
scroll-snap-type ``CSS`` 속성은 ``스크롤 컨테이너``에 설정되어 ``스냅 포트`` 내에서 스냅 지점 적용의 방향과 엄격성을 설정하여 스크롤 스냅을 선택합니다.

## Try it
[예제 내용 확인](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type)  
  
스크롤 포트의 콘텐츠가 변경되면(예: 콘텐츠 추가, 이동, 삭제 또는 크기 조정) 스크롤 컨테이너는 이전에 스냅된 콘텐츠가 여전히 존재하는 경우 해당 콘텐츠에 다시 스냅됩니다.  
  
``scroll-snap-type`` 또는 ``scroll-margin``과 같은 스크롤 스냅 관련 속성 값이 변경되면 스크롤 컨테이너는 현재 ``scroll-snap-type`` 값을 기준으로 다시 스냅됩니다.  
  
이러한 스냅 지점을 적용하는 데 사용되는 정확한 애니메이션이나 물리 연산을 지정하는 작업은 이 속성에서 다루지 않으며, 사용자 에이전트가 처리합니다.

## Syntax
~~~css
/* 스냅 없음 */
scroll-snap-type: none;

/* 스냅 축 키워드 값 */
scroll-snap-type: x;
scroll-snap-type: y;
scroll-snap-type: block;
scroll-snap-type: inline;
scroll-snap-type: both;

/* 스냅 엄격도에 대한 선택적 키워드 값 */
/* 필수 | 근접성 */
scroll-snap-type: x 필수;
scroll-snap-type: y 근접성;
scroll-snap-type: both 필수;

/* 전역 값 */
scroll-snap-type: inherit;
scroll-snap-type: initial;
scroll-snap-type: revert;
scroll-snap-type: revert-layer;
scroll-snap-type: unset;
~~~

## Values
### none
이 스크롤 컨테이너의 시각적 뷰포트가 스크롤될 때 스냅 지점을 무시해야 합니다.

### x
스크롤 컨테이너는 가로 축의 스냅 위치에만 스냅됩니다.

### y
스크롤 컨테이너는 세로 축의 스냅 위치에만 스냅됩니다.

### block
스크롤 컨테이너는 블록 축의 스냅 위치에만 스냅됩니다.

### inline
스크롤 컨테이너는 인라인 축의 스냅 위치에만 스냅됩니다.

### both
스크롤 컨테이너는 두 축의 스냅 위치에 독립적으로 스냅됩니다(각 축의 다른 요소에 스냅될 수 있음).

### mandatory
이 스크롤 컨테이너의 시각적 뷰포트는 현재 스크롤되지 않은 경우 스냅 위치에 스냅되어야 합니다.

### proximity
이 스크롤 컨테이너의 시각적 뷰포트는 현재 스크롤되지 않은 경우 스냅 위치에 스냅될 수 있습니다. 사용자 에이전트는 스크롤 매개변수를 기반으로 스냅 여부를 결정합니다. 스냅 축이 지정된 경우 이것이 기본 스냅 엄격성입니다.

## Examples
### 다른 축에서 스냅하기
#### HTML
~~~html
<main>
    <section class="x mandatory-scroll-snapping" dir="ltr">
        <div>X Mand. LTR</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
    </section>
    <section class="x proximity-scroll-snapping" dir="ltr">
        <div>X Prox. LTR</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
    </section>
    <section class="y mandatory-scroll-snapping" dir="ltr">
        <div>Y Mand. LTR</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
    </section>
    <section class="y proximity-scroll-snapping" dir="ltr">
        <div>Y Prox. LTR</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
    </section>
    <section class="x mandatory-scroll-snapping" dir="rtl">
        <div>X Mand. RTL</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
    </section>
    <section class="x proximity-scroll-snapping" dir="rtl">
        <div>X Prox. RTL</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
    </section>
    <section class="y mandatory-scroll-snapping" dir="rtl">
        <div>Y Mand. RTL</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
    </section>
    <section class="y proximity-scroll-snapping" dir="rtl">
        <div>Y Prox. RTL</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
    </section>
</main>
~~~

#### CSS
~~~css
/* scroll-snap */
.x.mandatory-scroll-snapping {
    scroll-snap-type: x mandatory;
}
.x.proximity-scroll-snapping {
    scroll-snap-type: x proximity;
}
.y.mandatory-scroll-snapping {
    scroll-snap-type: y mandatory;
}
.y.proximity-scroll-snapping {
    scroll-snap-type: y proximity;
}

div {
    text-align: center;
    scroll-snap-align: center;
    flex: none;
}
~~~

#### Results
[예제 내용 확인](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type)  
  
[내용출처 MDN scroll 범위](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type)