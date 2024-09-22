# animation-range
animation-range-start CSS 속성은 애니메이션의 첨부 범위 시작을 타임라인을 따라 설정하는 데 사용됩니다. 즉, 애니메이션이 타임라인을 따라 어디에서 시작될지 설정합니다.  
  
animation-range-start 및 animation-range-end 속성은 animation-range 단축 속성을 사용하여 설정할 수도 있습니다.

> __참고__ : animation-range-start는 애니메이션 단축어에 재설정 전용 값으로 포함됩니다. 즉, 애니메이션을 포함하면 이전에 선언된 animation-range-start 값이 정상으로 재설정되지만 애니메이션을 통해 특정 값을 설정할 수 없습니다. CSS 스크롤 기반 애니메이션을 만들 때는 애니메이션 단축어를 선언한 후 animation-range-start를 선언해야 효과가 나타납니다.

## Syntax
~~~css
/* 키워드 또는 길이 백분율 값 */
animation-range-start: normal;
animation-range-start: 20%;
animation-range-start: 100px;

/* 명명된 타임라인 범위 값 */
animation-range-start: cover;
animation-range-start: contain;
animation-range-start: cover 20%;
animation-range-start: contain 100px;
~~~

## Values ( 값 )
animation-range-start에 허용되는 값은 normal, ``<length-percentage>``, ``<timeline-range-name>`` 또는 ``<length-percentage>``가 뒤에 붙은 ``<timeline-range-name>``입니다. 사용 가능한 값에 대한 자세한 설명은 animation-range를 참조하세요.

또한 View Timeline Ranges Visualizer를 확인하세요. 이 기능은 다양한 값이 무엇을 의미하는지 쉽게 시각적으로 보여줍니다.

## 예제
예제는 공식 사이트 참조

[내용출처 MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-range-start)
