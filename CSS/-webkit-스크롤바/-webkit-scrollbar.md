# ::-webkit-scrollbar
> __비표준__: 이 기능은 비표준이며 표준 트랙에 없습니다. 웹을 접하는 프로덕션 사이트에서는 사용하지 마십시오. 모든 사용자에게 작동하는 것은 아닙니다. 또한 구현 간에 큰 비호환성이 있을 수 있으며 향후 동작이 변경될 수 있습니다.  
  
__아이폰 사파리에서 적용이 잘 안된다__  
  
CSS 의사 요소 ::-webkit-scrollbar 는 요소에 __overflow:scroll;__ 이 설정되어 있을 때 해당 요소의 스크롤바 스타일에 영향을 끼칩니다.

> __참고:__ overflow:scroll;이 설정되지 않으면, 스크롤바가 표시되지 않습니다.  
  
> __참고:__ ::-webkit-scrollbar는 ``Blink`` 및 ``WebKit`` 기반의 브라우저에서만 사용 가능합니다. (예: Chrome, Edge, Opera, Safari, iOS의 모든 브라우저 등등). 스크롤바를 스타일링하는 표준화된 방법은 [scrollbar-color (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color)와 [scrollbar-width (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width)로 이용 가능합니다.

근데 아직 __scrollbar-color__ , __scrollbar-width__ 는 호환이 안된다 (2022-09-20 기준)

## CSS 스크롤바 선택자
WebKit 브라우저의 스크롤바의 다양한 부분을 커스터마이징하기 위해 다음과 같은 의사 요소를 사용할 수 있습니다:
- ``::-webkit-scrollbar`` — 스크롤바 전체.
- ``::-webkit-scrollbar-button`` — 스크롤바의 버튼 (한 번 누를 때마다 위아래로 한 줄씩 오르내리는 위아래 화살표).
- ``::-webkit-scrollbar-thumb`` — 드래그할 수 있는 스크롤 손잡이.
- ``::-webkit-scrollbar-track`` — 흰색 막대 위에 회색 바가 존재할 경우의 스크롤바의 트랙(진행 표시줄).
- ``::-webkit-scrollbar-track-piece`` — 손잡이에 의해 덮이지 않은 트랙(진행 표시줄)의 부분.
- ``::-webkit-scrollbar-corner`` — 수평 스크롤바와 수직 스크롤바가 교차하는 곳의 하단 모서리. 주로 브라우저 창의 우측 하단 모서리에 위치한다.
- ``::-webkit-resizer`` — 몇몇 요소들의 하단 모서리에 나타나는, 드래그 할 수 있는 사이즈 변경 손잡이.

사용법은 따로 정리하겠다

[내용출처 MDN](https://developer.mozilla.org/ko/docs/Web/CSS/::-webkit-scrollbar)