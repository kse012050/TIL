# text-orientation
text-orientation CSS 속성은 한 줄의 텍스트 문자 방향을 설정합니다. 수직 모드의 텍스트에만 영향을 미칩니다(쓰기 모드가 수평 tb가 아닌 경우). 세로 스크립트를 사용하는 언어의 표시를 제어하고 세로 테이블 헤더를 만드는 데 유용합니다.

## 예
[MDN 사이트](https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation)

## 문법
~~~css
/* Keyword values */
text-orientation: mixed;
text-orientation: upright;
text-orientation: sideways-right;
text-orientation: sideways;
text-orientation: use-glyph-orientation;

/* Global values */
text-orientation: inherit;
text-orientation: initial;
text-orientation: revert;
text-orientation: revert-layer;
text-orientation: unset;
~~~
text-orientation 속성은 아래 목록에서 단일 키워드로 지정됩니다.

## 값
### mixed
가로 스크립트의 문자를 시계 방향으로 90° 회전합니다. 세로글자의 문자를 자연스럽게 배치합니다. 기본값.

### upright
가로 스크립트의 문자를 자연스럽게(세로) 배치하고 세로 스크립트의 글리프도 배치합니다. 이 키워드를 사용하면 모든 문자가 왼쪽에서 오른쪽으로 간주됩니다. 방향에 사용되는 값은 강제로 ltr이 됩니다.

### sideways
문자가 수평으로 배치되지만 전체 줄은 시계 방향으로 90° 회전됩니다.

### sideways-right
호환성을 위해 유지되는 sideways에 대한 별칭입니다.

### use-glyph-orientation
SVG 요소에서 이 키워드는 더 이상 사용되지 않는 SVG 속성 glyph-orientation-vertical 및 glyph-orientation-horizontal 값을 사용하게 합니다.  
  
[내용출처 MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation)

