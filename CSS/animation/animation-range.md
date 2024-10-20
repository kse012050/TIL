# animation-range
animation-range CSS 단축 속성은 애니메이션의 첨부 범위 시작과 끝을 타임라인을 따라 설정하는 데 사용됩니다. 즉, 애니메이션이 타임라인을 따라 어디에서 시작되고 끝날지입니다.

## 구성 속성
이 속성은 다음 CSS 속성의 약어입니다.

- animation-range-start
- animation-range-end

## Syntax
~~~css
/* 단일 키워드 또는 길이 백분율 값 */
animation-range: normal; /* normal normal과 동일 */
animation-range: 20%; /* 20% normal과 동일 */
animation-range: 100px; /* 100px normal과 동일 */

/* 단일 명명된 타임라인 범위 값 */
animation-range: cover; /* cover 0% cover 100%와 동일 */
animation-range: contain; /* contain 0% contain 100%와 동일 */
animation-range: cover 20%; /* cover 20% cover 100%와 동일 */
animation-range: contain 100px; /* contain 100px cover 100%와 동일 */

/* 범위 시작 및 종료에 대한 두 값 */
animation-range: normal 25%;
animation-range: 25% normal;
animation-range: 25% 50%;
animation-range: entry exit; /* entry 0% exit 100%와 동일 */
animation-range: cover cover 200px; /* cover 0% cover 200px와 동일 */
animation-range: entry 10% exit; /* entry 10% exit 100%와 동일 */
animation-range: 10% exit 90%;
animation-range: entry 10% 90%;
~~~
animation-range 단축 속성은 ``<animation-range-start>`` 및 ``<animation-range-end>`` 값의 조합으로 컨테이너 요소에 적용할 수 있습니다. 두 값이 모두 지정된 경우 ``<animation-range-start>`` 다음에 ``<animation-range-end>`` 순서로 해석됩니다.  
  
위의 구문 블록에 있는 주석에서 알 수 있듯이 단일 값만 제공된 경우 몇 가지 가능한 해석이 있습니다.  
  
- 값이 ``<length-percentage>`` 또는 normal인 경우 ``<animation-range-start>``는 해당 값을 사용하고 ``<animation-range-end>``는 normal과 같습니다.
- 값이 뒤에 ``<length-percentage>``가 없는 명명된 타임라인 범위인 경우 범위는 0%에서 100% 사이의 명명된 타임라인 범위가 됩니다.
- 값이 뒤에 ``<length-percentage>``가 있는 명명된 타임라인 범위인 경우 범위는 해당 명명된 타임라인 범위와 백분율에서 시작하여 해당 명명된 타임라인 범위와 100%에서 끝납니다.

## Values
animation-range-start 및/또는 animation-range-end를 나타내는 하나 또는 두 개의 값입니다. 이러한 값은 다음 중 하나일 수 있습니다.

### normal
animation-range-start의 경우 타임라인 시작을 나타내고 animation-range-end의 경우 타임라인 끝을 나타냅니다. 이는 기본값입니다.

### ``<length-percentage>``
타임라인 시작부터 측정한 길이 또는 백분율 값입니다.

### ``<timeline-range-name>``
전체 타임라인 내의 특정 명명된 타임라인 범위입니다. 가능한 값은 다음과 같습니다.

> #### cover
> 지정된 뷰 진행률 타임라인의 전체 범위를 나타냅니다(자세한 내용은 CSS 스크롤 기반 애니메이션 참조). 주제 요소가 스크롤 포트의 뷰 진행률 가시성 범위에 처음 진입하는 지점(진행률 0%)부터 완전히 벗어나는 지점(진행률 100%)까지입니다.
> 
> #### contain
> 주제 요소가 스크롤 포트의 뷰 진행률 가시성 범위에 완전히 포함되거나 완전히 포함되는 명명된 뷰 진행률 타임라인의 범위를 나타냅니다.
> 
> - 주제 요소가 스크롤 포트보다 작은 경우 주제 요소가 스크롤 포트에 처음 완전히 포함되는 지점(진행률 0%)부터 스크롤 포트에 더 이상 완전히 포함되지 않는 지점(진행률 100%)까지입니다.
> - 주제 요소가 스크롤 포트보다 큰 경우 주제 요소가 스크롤 포트를 처음 완전히 덮는 지점(진행률 0%)부터 스크롤 포트를 더 이상 완전히 덮지 않는 지점(진행률 100%)까지입니다.  
>   
> #### entry
> 주제 요소가 스크롤 포트에 처음 진입하기 시작하는 지점(진행률 0%)부터 스크롤 포트에 완전히 진입하는 지점(100%)까지의 명명된 뷰 진행률 타임라인 범위를 나타냅니다.
> 
> #### exit
> 주제 요소가 스크롤 포트를 처음 종료하기 시작하는 지점(진행률 0%)부터 스크롤 포트를 완전히 종료하는 지점(100%)까지의 명명된 뷰 진행률 타임라인 범위를 나타냅니다.
> 
> #### entry-crossing
> 주제 요소가 스크롤 포트의 시작 가장자리를 처음 교차하기 시작하는 지점(진행률 0%)부터 스크롤 포트의 시작 가장자리를 완전히 교차하는 지점(100%)까지의 명명된 뷰 진행률 타임라인 범위를 나타냅니다.
> 
> #### exit-crossing
> 주제 요소가 스크롤 포트의 끝 가장자리를 처음 교차하기 시작하는 지점(진행률 0%)부터 스크롤 포트의 끝 가장자리를 완전히 교차하는 지점(100%)까지의 명명된 뷰 진행률 타임라인 범위를 나타냅니다.  
  
``<length-percentage>``를 포함하지 않는 ``<timeline-range-name>`` 값의 경우, 애니메이션 범위 시작 값이면 백분율이 기본적으로 0%로 설정되고, 애니메이션 범위 종료 값이면 백분율이 기본적으로 100%로 설정됩니다.

> 참고: 위의 설명에서 이러한 값이 무엇을 의미하는지 시각화하는 것은 매우 어렵습니다. 다행히도 View Timeline Ranges Visualizer는 쉬운 시각적 형식으로 그 의미를 정확히 보여줍니다.  
  
### ``<timeline-range-name> <length-percentage>``
지정된 명명된 타임라인 범위를 통한 지정된 백분율 또는 거리와 일치하는 조합 값으로, 해당 타임라인 범위의 시작부터 측정됩니다.

> 참고: 스크롤 포트(자세한 내용은 스크롤 컨테이너 참조) 영역은 뷰 진행 가시성 범위로 알려져 있으며, 명명된 뷰 진행 타임라인 애니메이션의 주제 요소가 가시적이라고 간주되는 영역입니다. 기본적으로 이는 스크롤 포트의 전체 범위이지만 view-timeline-inset 속성을 사용하여 조정할 수 있습니다.

## 예제
예제는 공식 사이트 참조

[내용출처 MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-range)