# pointer-events
__pointer-events__ CSS 속성은, 특정 엘리먼트의 트리거 역할을 설정합니다.  
'시각적'으로 트리거 역할(hover,active)을 하는 기능 뿐만 아니라, 이벤트 핸들러가 등록 된 상태의 엘리먼트일지라도 이벤트 트리거로서의 역할을 강제로 막을 수 있습니다.

## pointer-events 속성
### auto
__pointer-events__ 속성이 지정되지 않은 경우와 같이 요소가 작동합니다.  
SVG 컨텐츠에서 이값과 값 __visiblePainted__은 동일한 효과를 갖습니다.

### none
이 요소는 포인터 이벤트의 ``대상``이 아닙니다. 그러나 포인터 이벤트는 해당 하위 항목이 __pointer-events__ 다른 값으로 설정된 경우 해당 하위 항 목을 대상으로 할 수 있습니다.  
이러한 상황에서, 포인터 이벤트는 이벤트 캡처 / 버블 단계 동안 하위 항목으로 / 로 부터가는 도중에 이 상위 요소에서 이벤트 리스너를 트리거합니다.

## pointer-events SVG
SVG 에서도 많이 사용되는 것으로 보이나, 아직 잘 파악되지 않습니다.  
__pointer-events__ 뿐만 아니라, __touch-action__ 이라는 것도 있는데, CSS에서 클릭이벤트? 아직 개발중?으로 보입니다.  
나중에 더 공부하세요.

[출제 내용 MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)