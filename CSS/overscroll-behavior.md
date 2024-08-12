# overscroll-behavior
overscroll-behavior CSS 속성은 스크롤 영역의 경계에 도달할 때 브라우저가 수행하는 작업을 설정합니다.

## 구성 속성
이 속성은 다음 CSS 속성의 약칭입니다.  
  
- 오버스크롤 동작-x
- 오버스크롤 동작-y

## 문법
~~~css
/* Keyword values */
overscroll-behavior: auto; /* default */
overscroll-behavior: contain;
overscroll-behavior: none;

/* Two values */
overscroll-behavior: auto contain;

/* Global values */
overscroll-behavior: inherit;
overscroll-behavior: initial;
overscroll-behavior: revert;
overscroll-behavior: revert-layer;
overscroll-behavior: unset;
~~~
오버스크롤 동작 속성은 아래 값 목록에서 선택한 하나 또는 두 개의 키워드로 지정됩니다.  
  
두 개의 키워드는 각각 x축과 y축의 오버스크롤 동작 값을 지정합니다. 하나의 값만 지정하면 x와 y가 모두 동일한 값을 갖는 것으로 간주됩니다.

## 값
### auto
기본 스크롤 오버플로 동작은 정상적으로 발생합니다.

### contain
기본 스크롤 오버플로 동작(예: "바운스" 효과)은 이 값이 설정된 요소 내에서 관찰됩니다. 그러나 인접한 스크롤 영역에서는 스크롤 체인이 발생하지 않습니다. 기본 요소는 스크롤되지 않습니다. 포함 값은 수직으로 당겨서 새로 고침 동작 및 수평 스와이프 탐색을 포함한 기본 브라우저 탐색을 비활성화합니다.

### none
인접한 스크롤 영역에 스크롤 체인이 발생하지 않으며 기본 스크롤 오버플로 동작이 방지됩니다.

## 설명
기본적으로 모바일 브라우저는 페이지 상단이나 하단(또는 다른 스크롤 영역)에 도달하면 "바운스" 효과를 제공하거나 페이지 새로 고침을 제공하는 경향이 있습니다. 또한 스크롤 내용이 있는 페이지 상단에 스크롤 내용이 있는 대화 상자가 있는 경우 대화 상자의 스크롤 경계에 도달하면 기본 페이지가 스크롤되기 시작한다는 사실을 눈치챘을 것입니다. 이를 스크롤 체이닝이라고 합니다.  
  
어떤 경우에는 이러한 동작이 바람직하지 않습니다. 오버스크롤 동작을 사용하면 원치 않는 스크롤 체인과 브라우저의 Facebook/Twitter 앱에서 영감을 받은 "새로 고침" 유형 동작을 제거할 수 있습니다.  
  
이 속성은 스크롤 컨테이너에만 적용됩니다. 특히 ``<iframe>``은 스크롤 컨테이너가 아니므로 iframe에 이 속성을 설정해도 아무런 효과가 없습니다. iframe에서 스크롤 체인을 제어하려면 iframe 문서의 ``<html>`` 및 ``<body>`` 요소 모두에 overscroll-behavior를 설정하세요.

[내용출처 MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior)