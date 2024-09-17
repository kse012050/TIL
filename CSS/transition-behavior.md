# transition-behavior
transition-behavior CSS 속성은 애니메이션 동작이 개별적인 속성에 대해 전환을 시작할지 여부를 지정합니다.

## Syntax ( 구문 )
~~~css
/* 키워드 값 */
transition-behavior: allow-discrete;
transition-behavior: normal;

/* 전역 값 */
transition-behavior: inherit;
transition-behavior: initial;
transition-behavior: revert;
transition-behavior: revert-layer;
transition-behavior: unset;
~~~

### Values ( 값 )
#### allow-discrete
전환은 개별 애니메이션 속성에 대한 요소에서 시작됩니다.

#### normal
전환은 개별 애니메이션 속성에 대한 요소에서 시작되지 않습니다.

## Description ( 설명 )
transition-behavior 속성은 다른 전환 속성, 특히 transition-property 및 transition-duration과 함께 사용할 때만 관련이 있습니다. 0이 아닌 시간 동안 속성이 애니메이션화되지 않으면 전환이 발생하지 않기 때문입니다.
~~~css
.card {
  transition-property: opacity, display;
  transition-duration: 0.25s;
  transition-behavior: allow-discrete;
}

.card.fade-out {
  opacity: 0;
  display: none;
}
~~~
transition-behavior 값은 단축형 transition 선언의 일부로 포함될 수 있습니다. 단축형에 포함되고 모든 속성을 사용하거나 기본값으로 지정할 때 allow-discrete 값은 일반적인 애니메이션 가능 속성에 영향을 미치지 않습니다. 다음 CSS는 위의 롱핸드 선언과 동일합니다.
~~~css
.card {
  transition: all 0.25s;
  transition: all 0.25s allow-discrete;
}

.card.fade-out {
  opacity: 0;
  display: none;
}
~~~
위의 스니펫에서 우리는 transition 속성을 두 번 포함합니다. 첫 번째 인스턴스는 allow-discrete 값을 포함하지 않습니다. 이는 크로스 브라우저 지원을 제공하여 카드의 다른 속성이 transition-behavior를 지원하지 않는 브라우저에서도 계속 transition되도록 보장합니다.

### 이산 애니메이션 동작 ( Discrete animation behavior )
이산 애니메이션 속성은 일반적으로 두 값 사이를 50% 전환하여 두 값 사이를 애니메이션화합니다.  
  
그러나 예외가 있는데, display: none 또는 content-visibility: hidden으로 애니메이션화하거나 display: none에서 content-visibility: hidden으로 애니메이션화하는 경우입니다. 이 경우 브라우저는 두 값 사이를 전환하여 전환된 콘텐츠가 전체 애니메이션 기간 동안 표시됩니다.  
  
예를 들어:  
- display를 none에서 block(또는 다른 보이는 display 값)으로 애니메이션화하는 경우 애니메이션 기간의 0%에서 값이 block으로 전환되어 애니메이션 기간 내내 표시됩니다.
- display를 block(또는 다른 보이는 display 값)에서 none으로 애니메이션화하는 경우 애니메이션 기간의 100%에서 값이 none으로 전환되어 애니메이션 기간 내내 표시됩니다.

## Examples ( 예시 )
예제는 공식사이트에서 확인해보세요!  
  
[내용출처 MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-behavior)