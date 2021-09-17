# -webkit-overflow-scrolling
> __비표준__: 이 기능은 비표준이며 표준 트랙에 없습니다. 웹을 접하는 프로덕션 사이트에서는 사용하지 마십시오. 모든 사용자에게 작동하는 것은 아닙니다. 또한 구현 간에 큰 비호환성이 있을 수 있으며 향후 동작이 변경될 수 있습니다.  
  
CSS __``-webkit-overflow-scrolling``__ 속성은 엘리젠트에서 가장 중요한 요소를 선정해야 합니다.  
  
초기값 : auto  
적용대상 : scrolling boxes  
상속 : yes  
계산된 값 : 지정된 대로  
animation type : discrete

## value 값
### auto
"일반적"인 스크롤을 사용합니다. 즉 손가락을 터치 화면에서 떼는 순간 스크롤이 멈춥니다.

### touch
모멘텀 기반 스크롤을 사용합니다. 스크롤 제스쳐가 끝나고 손가락을 터치 화면에서 떼어도 잠시 스크롤이 지속됩니다. 지속 속도와 시간은 스크롤 제스쳐의 세기에 따라 달라집니다. 또한 새로운 쌓임 맥락을 생성합니다.

[overflow-scrolling MDN 아이폰 스크롤 제어](https://developer.mozilla.org/ko/docs/Web/CSS/-webkit-overflow-scrolling)