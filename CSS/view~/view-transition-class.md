# view-transition-class
`view-transition-class` CSS 속성은 선택된 요소에 식별 클래스(`<custom-ident>`)를 제공하여 해당 요소의 뷰 전환 스타일을 지정하는 추가적인 방법을 제공합니다.

## Syntax
~~~css
/* <custom-ident> 값 예시 */
view-transition-class: card;

/* 키워드 값 */
view-transition-class: none;

/* 전역 값 */
view-transition-class: inherit;
view-transition-class: initial;
view-transition-class: revert;
view-transition-class: revert-layer;
view-transition-class: unset;
~~~

### Values
#### `<custom-ident>`
선택된 요소가 루트 `뷰 전환`과 별도의 뷰 전환에 참여하도록 하는 식별 이름입니다. 식별자는 고유해야 합니다. 렌더링된 두 요소가 동시에 동일한 ` view-transition-name`을 갖는 경우, `ViewTransition.read`y는 거부되고 전환은 건너뛰어집니다.

#### none
이 요소에 대해 생성된 명명된 뷰 전환 의사 요소에는 클래스가 적용되지 않습니다.


## Description
`view-transition-class` 값은 CSS 클래스 이름과 유사한 스타일링 후크를 제공하여 여러 뷰 전환 가상 요소에 동일한 스타일을 적용할 수 있도록 합니다. 이 값은 요소를 캡처 대상으로 지정하는 것이 아닙니다. 각 요소에는 여전히 고유한 `view-transition-name`이 필요하며, `view-transition-class`는 이미 `view-transition-name`이 있는 요소에 스타일을 추가하는 용도로만 사용됩니다. `view-transition-name`을 자동으로 판별하는 기능은 CSS 뷰 전환 모듈 레벨 2 사양에서 논의 중입니다.  
  
`view-transition-class`는 `::view-transition-group()`, `::view-transition-image-pair()`, `::view-transition-old()`, `::view-transition-new()` 등의 뷰 전환 가상 요소를 사용하여 스타일을 적용합니다. 이는 이전 상태의 요소와 새 상태의 해당 요소 간의 뷰 전환을 연결하는 `view-transition-name`과는 다릅니다.  
  
뷰 전환을 지원하는 모든 브라우저에서 `view-transition-class` 속성이 완전히 지원될 때까지 각 요소에 대해 사용자 지정 `::view-transition-group()`을 포함하십시오.  
  
[내용출처 MDN view-transition-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/view-transition-class)