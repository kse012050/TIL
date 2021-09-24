# box-orient
> __비표준__: 이 기능은 비표준이며 표준 트랙에 없습니다. 웹을 접하는 프로덕션 사이트에서는 사용하지 마십시오. 모든 사용자에게 작동하는 것은 아닙니다. 또한 구현 간에 큰 비호환성이 있을 수 있으며 향후 동작이 변경될 수 있습니다.  
  
> __경고__: 이것은 원래 CSS Flexible Box Layout Module 초안의 속성이며 새로운 표준으로 대체되었습니다. 현재 표준에 대한 정보는 [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)를 참조하십시오.  
  
__box-orient__ CSS 속성은 요소가 콘텐츠를 가로 또는 세로로 배치할지 여부를 설정합니다.

~~~css
/* 키워드 값 */
box-orient: horizontal;
box-orient: vertical;
box-orient: inline-axis;
box-orient: block-axis;

/* 전역 값 */
box-orient: inherit;
box-orient: initial;
box-orient: unset;
~~~

## Syntax
box-orient 속성은 아래 나열된 키워드 값 중 하나로 지정됩니다.

### Values
#### horizontal
상자는 내용물을 수평으로 배치합니다.

#### vertical
상자는 내용물을 수직으로 배치합니다.

#### inline-axis (HTML)
상자는 인라인 축을 따라 자식을 표시합니다.  
  
#### block-axis (HTML)
상자는 블록 축을 따라 자식을 표시합니다.  
  
인라인 및 블록 축은 쓰기 모드 종속 키워드로, 영어로 각각 ``수평`` 및 ``수직``으로 매핑됩니다.


## Description ( 설명 )
HTML DOM 요소는 기본적으로 인라인 축을 따라 내용을 배치합니다. 이 CSS 속성은 CSS 표시 값이 box 또는 inline-box인 HTML 요소에만 적용됩니다.

[내용출처 MDN box-orient](https://developer.mozilla.org/en-US/docs/Web/CSS/box-orient)