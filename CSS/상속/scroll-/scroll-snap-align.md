# scroll-snap-align
``scroll-snap-align`` 속성은 상자의 스냅 위치를 스냅 컨테이너의 ``스냅 포트``(``정렬 컨테이너``) 내에서 ``스냅 영역``(``정렬 주체``)의 정렬로 지정합니다.

## Try it
[예제 내용 확인](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align)  

## Syntax
~~~css
/* Single keyword value */
scroll-snap-align: none;
scroll-snap-align: center;
scroll-snap-align: start;
scroll-snap-align: end;

/* Two keyword values */
scroll-snap-align: start end;
scroll-snap-align: end center;
scroll-snap-align: center start;

/* Global values */
scroll-snap-align: inherit;
scroll-snap-align: initial;
scroll-snap-align: revert;
scroll-snap-align: revert-layer;
scroll-snap-align: unset;
~~~

### Values
``scroll-snap-align`` 속성에 하나 또는 두 개의 값을 지정할 수 있습니다. 값을 하나만 설정하면 블록 축과 인라인 축 모두에 적용됩니다. 값을 두 개 설정하면 첫 번째 값은 블록 축을 제어하고 두 번째 값은 인라인 축을 제어합니다.

#### none
상자는 해당 축에서 스냅 위치를 정의하지 않습니다.

#### start
스크롤 컨테이너의 스냅포트 내에서 이 상자의 스크롤 스냅 영역의 시작 정렬은 이 축의 스냅 위치입니다.

#### end
스크롤 컨테이너의 스냅포트 내에서 이 상자의 스크롤 스냅 영역의 끝 정렬은 이 축의 스냅 위치입니다.

#### center
스크롤 컨테이너의 스냅포트 내에서 이 상자의 스크롤 스냅 영역의 가운데 정렬은 이 축의 스냅 위치입니다.  
  
[내용출처 MDN scroll 모션 들어갔을 때 위치](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align)