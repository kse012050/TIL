# @view-transition
``@view-transition`` CSS 규칙은 문서 간 탐색 시 현재 문서와 대상 문서에 뷰 전환을 적용하는 데 사용됩니다.  
  
문서 간 [뷰 전환](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API)이 작동하려면 탐색의 현재 문서와 대상 문서가 동일한 원본에 있어야 합니다.

## Syntax
~~~css
@view-transition {
    navigation: auto;
}
~~~

## Descriptors

### navigation
이 at-규칙이 문서의 뷰 전환 동작에 미치는 영향을 지정합니다. 가능한 값은 다음과 같습니다.  

- ``auto``: 탐색이 동일 출처이고 교차 출처 리디렉션이 없으며, ``navigationType``이 ``traverse``, ``push`` 또는 ``replace``인 경우, 탐색에 참여할 때 문서가 뷰 전환을 겪습니다. ``push`` 또는 ``replace``의 경우, 탐색은 브라우저 UI 기능이 아닌 페이지 콘텐츠와 상호 작용하는 사용자에 의해 시작되어야 합니다.
- ``none``: 문서가 뷰 전환을 겪지 않습니다.

## Examples
### 페이지 뷰 전환
다음 코드 조각은 페이지 전환 데모에 사용된 주요 개념을 보여줍니다. 이 데모는 크로스 문서 뷰 전환을 사용합니다. 이는 사이트의 두 페이지 사이를 이동할 때 발생하는 0.5초 단위 전환입니다. [전체 데모는 뷰 전환 다중 페이지 앱 데모를 참조하세요.](https://mdn.github.io/dom-examples/view-transitions/mpa/)  
  
``@view-transition`` 규칙은 CSS에서 현재 문서와 대상 문서 모두에 지정되어 뷰 전환을 적용합니다.
~~~css
@view-transition {
    navigation: auto;
}
~~~
``@view-transition`` 규칙 외에도 ``@keyframes`` 규칙을 사용하여 두 개의 키프레임 애니메이션을 정의하고 애니메이션 단축 속성을 사용하여 애니메이션을 적용하려는 아웃바운드([::view-transition-old()](https://developer.mozilla.org/en-US/docs/Web/CSS/::view-transition-old)) 및 인바운드([::view-transition-new()](https://developer.mozilla.org/en-US/docs/Web/CSS/::view-transition-new)) 페이지의 요소에 해당 키프레임 애니메이션을 적용합니다.
~~~css
/* 사용자 지정 애니메이션 만들기 */
@keyframes move-out {
    from {
        transform: translateY(0%);
    }

    to {
        transform: translateY(-100%);
    }
}

@keyframes move-in {
    from {
        transform: translateY(100%);
    }

    to {
        transform: translateY(0%);
    }
}

/* 이전 및 새 페이지 상태에 사용자 지정 애니메이션 적용 */
::view-transition-old(root) {
    animation: 0.4s ease-in both move-out;
}

::view-transition-new(root) {
    animation: 0.4s ease-in both move-in;
}
~~~

[내용출처 MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@view-transition)