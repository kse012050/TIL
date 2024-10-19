# animation-timeline
animation-timeline CSS 속성은 CSS 애니메이션의 진행을 제어하는 ​​데 사용되는 타임라인을 지정합니다.

다음 유형의 타임라인은 animation-timeline을 통해 설정할 수 있습니다.

- 문서가 브라우저에 처음 로드된 이후 시간이 지남에 따라 진행되는 기본 문서 타임라인입니다. 이는 전통적으로 CSS 애니메이션과 관련된 타임라인이며 auto 값으로 선택되거나 animation-timeline 값을 전혀 지정하지 않으면 됩니다.
- 스크롤 가능한 요소(스크롤러)를 위와 아래(또는 좌우) 사이로 스크롤하여 진행하는 스크롤 진행 타임라인. 스크롤 범위에서의 위치는 진행률 백분율로 변환됩니다. 시작 시 0%, 끝 시 100%. 스크롤 진행 타임라인을 제공하는 요소는 두 가지 방법으로 지정할 수 있습니다.
    - 명명된 스크롤 진행률 타임라인은 스크롤 진행률 타임라인을 제공하는 스크롤러가 scroll-timeline-name 속성(또는 scroll-timeline 단축 속성)을 사용하여 명시적으로 명명된 것입니다. 그런 다음 해당 요소의 animation-timeline 속성 값으로 지정하여 애니메이션을 적용할 요소에 이름을 연결합니다.
    - 익명 스크롤 진행 타임라인은 애니메이션을 적용할 요소에 scroll() 함수를 애니메이션 타임라인 값으로 지정하고, 이를 통해 스크롤 진행 타임라인을 제공하는 스크롤러와 전달한 인수에 따라 사용할 스크롤 축을 선택합니다.
- 스크롤러 내부의 요소(주제라고 함)의 가시성 변경에 따라 진행되는 뷰 진행 타임라인. 스크롤러 내부의 주제 가시성은 추적됩니다. 기본적으로 타임라인은 주제가 스크롤러의 한쪽 가장자리에서 처음 보일 때 0%이고, 반대쪽 가장자리에 도달하면 100%입니다. 스크롤 진행 타임라인과 달리 스크롤러를 지정할 수 없습니다. 주제의 가시성은 항상 가장 가까운 조상 스크롤러 내에서 추적됩니다. 뷰 진행 타임라인을 제공하는 주제는 두 가지 방법으로 지정할 수 있습니다.
    - 명명된 뷰 진행 타임라인은 view-timeline-name 속성(또는 view-timeline 단축 속성)을 사용하여 주체가 명시적으로 명명된 타임라인입니다. 그런 다음 해당 요소의 animation-timeline 속성 값으로 지정하여 애니메이션을 적용할 요소에 이름을 연결합니다. 이것은 핵심 사항입니다. 명명된 뷰 진행 타임라인의 경우 애니메이션을 적용할 요소가 주체와 동일할 필요가 없습니다.
    - 익명의 뷰 진행 타임라인은 주제에 view() 함수가 애니메이션 타임라인 값으로 제공되어 가장 가까운 부모 스크롤러 내에서의 위치를 ​​기준으로 애니메이션이 적용되는 타임라인입니다.

> 참고: animation-timeline은 애니메이션 단축어에 재설정 전용 값으로 포함됩니다. 즉, animation을 포함하면 이전에 선언된 animation-timeline 값이 자동으로 재설정되지만 animation을 통해 특정 값을 설정할 수 없습니다. CSS 스크롤 기반 애니메이션을 만들 때는 애니메이션 단축어를 선언한 후 animation-timeline을 선언해야 효과가 적용됩니다.  
  
## Syntax
~~~css
/* 키워드 */
animation-timeline: none;
animation-timeline: auto;

/* 단일 애니메이션 명명된 타임라인 */
animation-timeline: --timeline_name;

/* 단일 애니메이션 익명 스크롤 진행 타임라인 */
animation-timeline: scroll();
animation-timeline: scroll(scroller axis);

/* 단일 애니메이션 익명 뷰 진행 타임라인 */
animation-timeline: view();
animation-timeline: view(axis inset);

/* 여러 애니메이션 */
animation-timeline: --progressBarTimeline, --carouselTimeline;
animation-timeline: none, --slidingTimeline;

/* 전역 값 */
animation-timeline: inherit;
animation-timeline: initial;
animation-timeline: revert;
animation-timeline: revert-layer;
animation-timeline: unset;
~~~

## Values
### ``none``
애니메이션이 타임라인과 연관되지 않았습니다.

### ``auto``
애니메이션의 타임라인은 문서의 기본 DocumentTimeline입니다.

### ``scroll()``
익명의 스크롤 진행 타임라인은 현재 요소의 일부 조상 스크롤러에서 제공합니다. 함수 매개변수를 사용하면 스크롤러와 타임라인이 측정될 스크롤 축을 선택할 수 있습니다.

자세한 내용은 scroll()을 참조하세요.

### ``view()``
익명의 뷰 진행 타임라인은 animation-timeline: view();가 설정된 주체에서 제공합니다. 함수 매개변수를 사용하면 타임라인 진행률을 추적할 스크롤바 축과 주체가 표시되는 것으로 간주되는 상자의 위치를 ​​조정하는 인셋을 선택할 수 있습니다.

자세한 내용은 view()를 참조하세요.

### ``<dashed-ident>``
이전에 scroll-timeline-name 또는 view-timeline-name 속성(또는 scroll-timeline 또는 view-timeline 약어 속성)으로 선언된 명명된 타임라인을 식별하는 ``<dashed-ident>``입니다.

## Examples
예제는 공식문서에서 확인  
  
[내용출처 MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline)